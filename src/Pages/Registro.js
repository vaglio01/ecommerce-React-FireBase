import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import { Card}  from 'react-bootstrap';
import firebase from '../Config/firebase';
import { useHistory } from 'react-router-dom';
import BotonCarga from '../Components/BotonCarga';

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


const Registro = () => {
   //Definicion de estados
    const [form, setForm] = useState({nombre: '', apellido: '',email:'',password: ''});
    const [spinner, setSpinner] = useState (false);
    const history = useHistory(); 
  //Definicion de variables

  // Definicion Funciones
   const handleSubmit = (e)=>{
        setSpinner(true);
        console.log("HandleSubmit")
        console.log(e,form)
        firebase.auth.createUserWithEmailAndPassword(form.email,form.password)
        .then(data=>{
          console.log("data",data)
          firebase.db.collection("usuarios").add({
            nombre:form.nombre,
            apellido:form.apellido,
            email:form.email,
            userId:data.user.uid
          })
          .then(data=>{
            console.log ("data databese", data)
            setSpinner(false);
            history.push("/login");
          })
          .catch (error=>{
            console.log("error databese", error)
            setSpinner(false);
          })
        })
        .catch (err=>{
          console.log("error",err);
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
            <Card.Title  style= {{margin: '20px auto'}}>Registrarse</Card.Title>
            <Form onSubmit= {handleSubmit}>
              <Form.Group controlId="formBasicEmail" style={styles.formStyle}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="Texto" name="nombre" value={form.nombre} onChange= {handleChange} placeholder="Ingrese su Nombre" / >
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="Texto" name="apellido" value={form.apellido } onChange= {handleChange}placeholder="Ingrese su Apellido" />
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

export default Registro;