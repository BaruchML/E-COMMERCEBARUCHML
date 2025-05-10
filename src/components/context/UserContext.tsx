import { useState, createContext, } from "react"
import {ChildrenContextProps,UserContextType, UserType } from "../../types/componentTypes";

export const UserContext = createContext<UserContextType>({
    user: null,
    state:'no-loged',
    loadUser: ({id, name}:UserType) =>{} ,
    cleanUser:() => {},
    
});

export const UserProvider = ({ children }:ChildrenContextProps) => {

    const [user, setUser] = useState<UserType|null>(null);
    const [state, setState] = useState<'no-loged' | 'logging'| 'logged'>('no-loged');// se van a enviar estos dos estados

    const loadUser = ({id, name}:UserType) => {
       const stateInLoggin = state === 'logged'

        if (stateInLoggin) {
            return user
        } else {
            setUser({id,name})    
            setState('logged')
        }
    }

    const cleanUser = () => {
        setUser(null);
        setState('no-loged')
    }

    return (

        <UserContext.Provider value={{user,state,loadUser,cleanUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

