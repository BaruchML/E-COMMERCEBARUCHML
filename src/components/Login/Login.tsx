import Button from "../ui/Button";
import Container from "../ui/container";
import { FormEvent, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { CardLogin } from "../ui/Card";
import { Link } from "react-router-dom";
import { UserDataType } from "../../types/componentTypes";


function Login() {
    const { user,loadUser,getUser } = useContext(UserContext);
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const usuarioProvisional:UserDataType = {
      name:name,
      lastName:'algo',
      phoneNumber: '1212121',
      email:'algo@gmail'
    }
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    if (!name) {
      setError('Por favor, ingresa un nombre de usuario.');
    }else{
      setError('')
     loadUser({userData:usuarioProvisional,state:'no-loged'})
    }
  };

    return (
        <Container clean scss="container-center-login" title="Inicia Sesión">
            <CardLogin error={error} handleName={handleName} userName={name} handleSubmit={handleSubmit} scss="card-login"/>
            <br></br>
                   <p style={{ justifySelf: 'center',  }}> Si todavia no tienes una cuenta:</p>
                    <Link to={'/register'}><Button>Registrate</Button></Link>
        </Container>
    );
}

export default Login;