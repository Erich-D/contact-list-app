import { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button, NativeModules} from 'react-native';
import { ContactreducerAction } from '../reducers/contact-reducer';
import TouchButton from './TouchButton';


type FormProp = {
    name:string
    phone:number 
    email:string 
    dispatch:React.Dispatch<ContactreducerAction>
}

export default function ContactForm(props:FormProp) {
    // const [name, setName] = useState<string>('');
    // const [phone, setPhone] = useState<number>(0);
    // const [email, setEmail] = useState<string>('');


    return <View style={styles.container}>
        <Text style={styles.label}>Contact Name</Text>
        <TextInput style={styles.input} value = {props.name} onChangeText = {(e)=>props.dispatch({type:"SET_NAME",payload:e})}/> 
        <Text style={styles.label}>Contact Phone Number</Text>
        <TextInput style={styles.input} keyboardType='numeric' value = {String(props.phone)} onChangeText = {(e)=>props.dispatch({type:"SET_PHONE",payload:Number(e)})}/>
        <Text style={styles.label}>Contact Email</Text>
        <TextInput style={styles.input} keyboardType='email-address' value = {props.email} onChangeText = {(e)=>props.dispatch({type:"SET_EMAIL",payload:e})}/>
        <TouchButton title='Add New Contact' handler={addContact} size={14}/>
    </View> 
    
    function addContact(){
        const newContact = {id:Math.random(), name:props.name, phone:props.phone, email:props.email}
        props.dispatch({type:"ADD_CONTACT", payload:newContact})
        // setName('')
        // setEmail('')
        // setPhone(0)
    }
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        borderWidth: 1,
        width:"80%",
        marginTop: 2,
        backgroundColor:"#00FF7F",
        borderRadius:15,
        height:'auto',
    },

    label:{
        fontWeight:'bold',
        margin:3,
        color: 'white',
        padding:2,
        fontSize:19,
    },

    input:{
        fontWeight:'bold',
        margin:3,
        color: 'white',
        borderWidth: 1,
        padding:2,
        fontSize:15,
        width:"80%"
    }
})