import {View, Linking, StyleSheet} from 'react-native';
import Heading from '../components/Heading';
import TouchButton from '../components/TouchButton';
import { Contact } from '../reducers/contact-reducer';
import { Props } from '../types';

export default function ContactScreen({navigation, route}:Props["contact"]) {
    return <View style={styles.container}>
        <Heading txt={route.params.contact.name} size={32}/>
        <TouchButton size={24} title={`Send ${route.params.contact.name} a message`} handler={() => Linking.openURL(`sms:${route.params.contact.phone}`)}/>
        <TouchButton size={24} title={`Send ${route.params.contact.name} an email`} handler={() => Linking.openURL(`mailto: ${route.params.contact.email}?subject=hello&body=Hi ${route.params.contact.name}`)}/>
    </View>
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