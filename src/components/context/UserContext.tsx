import { useState, createContext, } from "react"
import { ChildrenContext, UserContextType, UserType } from "../../types/componentTypes";

export const UserContext = createContext<UserContextType>({
    user: null,
    loadUser: ({name, state }: UserType) => { },
    logOut: () => { },
    getUser: () => { }

});

export const UserProvider = ({ children }: ChildrenContext) => {

    const [user, setUser] = useState<UserType | null>(null);
    console.log(user);


    const loadUser = ({ name, state, }: UserType) => {
    function generarId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}
const id = generarId()
        const stateInLoggin = state === 'logged'
        if (name === '') {
            console.log('que paso mr');
        } else if (stateInLoggin) {
            return user
        } else {
            setUser({ name: name, state: 'logged', id: id })
            // setState('logged')
        }
    }
    const getUser = () => {
        console.log(user);
    }

    const logOut = () => {
        setUser(null);
        // setState('no-loged')
    }

    return (

        <UserContext.Provider value={{ user, loadUser, logOut, getUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

