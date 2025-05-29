import Container from "../ui/container";
import { FormEvent, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import {  CardRegister } from "../ui/Card";



function Register() {
    const { user,loadUser } = useContext(UserContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [error, setError] = useState("");

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);

        setName(e.target.value)
    }
    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setLastName(e.target.value)
    }
    const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setPhoneNumber(e.target.value)
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handleEmailConf = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setEmailConf(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!name || !lastName || !phoneNumber || !email || !emailConf) {
            setError("Porfavor completa los campos");
            return;
        }

        if (email !== emailConf) {
            setError("Los campos del email no coinciden, maldito");
            return;
        }
        setError('');
        loadUser({ name, state: "no-loged" })

    };

    return (
        <Container clean scss="container-center-login" title="Registrate">
            <CardRegister
                error={error}
                handleName={handleName}
                handleLastName={handleLastName}
                handlePhoneNumber={handlePhoneNumber}
                handleEmail={handleEmail}
                handleEmailConf={handleEmailConf}
                handleSubmit={handleSubmit}
                scss="card-login" />
        </Container>
    );
}

export default Register;