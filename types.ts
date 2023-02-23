import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Contact } from "./reducers/contact-reducer"

export type RootStackParamList = {
    // use undefined to not take in any props
    Home: undefined,
    // the profile screen takes in a userId which is a number
    Contact: {contact: Contact}
}

export type Props = {
    // one sub-type for screens with no props
    home: NativeStackScreenProps<RootStackParamList, 'Home'>// one sub-type for profile page with user id:
    contact: NativeStackScreenProps<RootStackParamList, 'Contact'>;

}