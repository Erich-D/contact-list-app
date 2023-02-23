import { useReducer } from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import ContactButton from '../components/ContactButton';
import ContactForm from '../components/ContactForm';
import Heading from '../components/Heading';
import { Contact, contactReducer, initialState } from '../reducers/contact-reducer';
import { Props } from '../types';

export default function HomeScreen({navigation}:Props["home"]) {

    const [contactState, dispatch] = useReducer(contactReducer, initialState)


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Heading txt='Add a New Contact' size={24}/>
            <ContactForm dispatch={dispatch} name={contactState.name} phone={contactState.phone} email={contactState.email}/>
            <Heading txt='My Contacts' size={24}/>
            <FlatList style={{width:"80%"}} data = {contactState.contacts} renderItem = {
                ({item, index}) => (
                    <View key={index}>
                        <ContactButton id={item.id} name={item.name} handler={navigateToContact}/>
                    </View>
                )
            }/>
        </ScrollView>
    )
    function navigateToContact(id:number){
        const selected:Contact = contactState.contacts.filter(c=>c.id===id)[0]
        navigation.navigate("Contact", {contact: selected})
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#98FB98',
      alignItems: 'center',
      justifyContent: 'center',
      height:"100%"
    },
  });