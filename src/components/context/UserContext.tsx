import { useState, createContext, } from "react"
import { ChildrenContext, UserContextType, UserType } from "../../types/componentTypes";

export const UserContext = createContext<UserContextType>({
    user: null,
    loadUser: ({ userData, state }: UserType) => { },
    logOut: () => { },
    getUser: () => { }

});

export const UserProvider = ({ children }: ChildrenContext) => {

    const [user, setUser] = useState<UserType | null>(null);

    const loadUser = ({ userData, state, }: UserType) => {
        function generarId() {
            return Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
        }
        const id = generarId()
        const stateInLoggin = state === 'logged'
       if (stateInLoggin) {
            return user
        } else {
            setUser({
                userData: {
                    name: userData.name,
                    email: userData.email,
                    phoneNumber: userData.phoneNumber,
                    lastName: userData.lastName
                },
                state: 'logged', id: id
            })
        }
    }
    const getUser = () => {
        console.log(user);
    }

    const logOut = () => {
        if (user) {
            setUser({...user,state:'no-loged'});
        }
     
    }

    return (

        <UserContext.Provider value={{ user, loadUser, logOut, getUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

