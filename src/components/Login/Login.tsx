import Button from "../ui/Button";
import Container from "../ui/container";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { CardLogin } from "../ui/Card";


function Login() {
    const { loadUser } = useContext(UserContext)
    const [name, setName] = useState('')

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return (
        <Container clean scss="container-center-login" title="Inicia Sesión">
            <CardLogin handleName={handleName} userName={name} loadUser={loadUser} scss="card-login"/>
        </Container>
    );
}

export default Login;