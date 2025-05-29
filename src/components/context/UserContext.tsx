import { useState, createContext, } from "react"
import {ChildrenContext,UserContextType, UserType } from "../../types/componentTypes";

export const UserContext = createContext<UserContextType>({
    user: null,
    loadUser: ({id, name,state}:UserType) =>{} ,
    logOut:() => {},
    
});

export const UserProvider = ({ children }:ChildrenContext) => {

    const [user, setUser] = useState<UserType|null>(null);
    // const [state, setState] = useState<'no-loged' | 'logging'| 'logged'>('no-loged');// se van a enviar estos dos estados

    const loadUser = ({name,state,id}:UserType) => {
       const stateInLoggin = state === 'logged'

        if (stateInLoggin) {
            return user
        } else {
            
            console.log(user);
            setUser({name,state:'logged',id})    
            // setState('logged')
            
        }
    }

    const logOut = () => {
        setUser(null);
        // setState('no-loged')
    }

    return (

        <UserContext.Provider value={{user,loadUser,logOut}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

