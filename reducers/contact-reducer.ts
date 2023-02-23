
export type Contact = {
    id:number
    name:string
    phone:number
    email:string
}

export type ContactReducerState = {
    name:string
    phone:number
    email:string
    contacts:Contact[]
}

type AddContact = {type:"ADD_CONTACT",payload:Contact}
type SetName = {type:"SET_NAME",payload:string}
type SetPhone = {type:"SET_PHONE", payload:number}
type SetEmail = {type:"SET_EMAIL", payload:string}

export type ContactreducerAction = AddContact | SetName | SetPhone | SetEmail

export function contactReducer(state:ContactReducerState, action:ContactreducerAction):ContactReducerState{
    const newState: ContactReducerState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "SET_NAME":{
            newState.name = action.payload
            return newState
        }

        case "SET_PHONE":{
            newState.phone = action.payload
            return newState
        }

        case "SET_EMAIL":{
            newState.email = action.payload
            return newState
        }

        case "ADD_CONTACT":{
            newState.contacts.push(action.payload)
            newState.contacts.sort((a,b)=>{return a.name.localeCompare(b.name)})
            newState.name = ""
            newState.email = ""
            newState.phone = 0
            console.log(newState)
            return newState
        }
    }
}



export const initialState = {
    name:"",
    phone:0,
    email:"",
    contacts:[
        {id:25, name:"Nicolas Cage", phone:5263547891, email:'nicolas@example.com'},
        {id:26, name:"John Doe", phone:5265899564, email:'john@example.com'},
        {id:27, name:"Sally Somebody", phone:5264586327, email:'sally@example.com'},
        {id:28, name:"George Costanza", phone:5264786329, email:'george@example.com'},
        {id:29, name:"Jim Beam", phone:5264983657, email:'jim@example.com'}
    ]
}