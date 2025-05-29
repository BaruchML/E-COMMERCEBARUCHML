import Button from "../ui/Button";
import Container from "../ui/container";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


function Login() {
    const { user, logOut, loadUser } = useContext(UserContext)
    return (
        <Container scss="container center">
            <form>
                <input>
                    </input>
                    <label> Usuario
                    </label>
            </form>
            <Button onClickEvent={() => loadUser({ id: 1, name: 'baruch', state: "no-loged" })} >Log in</Button>
            {/* // va a register */} <Button onClickEvent={() => alert('ir a register')} >Register</Button>
        </Container>
    );
}

export default Login;