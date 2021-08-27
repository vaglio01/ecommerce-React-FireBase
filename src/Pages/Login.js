import React, {useState, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import { Card}  from 'react-bootstrap';
import firebase from '../Config/firebase';
import { useHistory } from 'react-router-dom';
import BotonCarga from '../Components/BotonCarga';
import NetContext from "../Context/NetContext";

//Style

const styles={
  carStyke:{
    width: '40%', 
    margin: ' 20px auto'
  },
  formStyle:{
    colro: '#fff', 
    textAlign: 'center'
  }
}

const Login = () => {
   //Definicion de estados
    const context = useContext(NetContext);
    const [form, setForm] = useState({nombre: '', apellido: '',email:'',password: ''});
    const [spinner, setSpinner] = useState (false);
    const history = useHistory(); 
  //Definicion de variables

  // Definicion Funciones
   const handleSubmit = (e)=>{
        setSpinner(true);
       firebase.auth.signInWithEmailAndPassword(form.email, form.password)
       .then(data=>{
        setSpinner(false);
        context.loginUser(data.user.email);
        history.push("/");
       })
       .catch(err=>{
        setSpinner(false);
       })
        e.preventDefault();
    }

    const handleChange = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]:value
        })

    }
  //Definicion de hooks

  //Render
    return (
        <Card className="bg-dark text-white" border="white" style={styles.carStyke}>
            <Card.Title  style= {{margin: '20px auto'}}>Ingresar</Card.Title>
              <Form onSubmit= {handleSubmit}>
                  <Form.Group /* controlId="formBasicEmail" */ style={styles.formStyle}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" value={form.email} onChange= {handleChange} placeholder="Ingrese su email" />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={form.password} onChange= {handleChange} placeholder="Password" />
                  </Form.Group>
                  <BotonCarga text={"Registrandose"} loading={spinner}/>
              </Form>
      </Card>
      
    );
}

export default Login;