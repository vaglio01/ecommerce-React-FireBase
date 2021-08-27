import React, { useState }  from 'react';
import {Link} from "react-router-dom";
import { Card, Button } from 'react-bootstrap';


const styles={
    scard:{
        width: '25%',
        minWidth: '150px',
        margin: '5px',
        textAlign: 'center',

    },
    buttons:{
        margin:"auto"
    }
}

const ProductoDetalle = (props) => {
     //Definicion de estados
     const [mensaje,setMensaje] = useState ('')
   //Definicion de variables
 
   // Definicion Funciones
 
   //Definicion de hooks


    return (
            <Card  border="light" style={styles.scard} >
                <Card.Img  className=".card " variant="top" src={props.data.imagen}  />
                <Card.Body >
                <Card.Title >{props.data.name}</Card.Title>
                <Card.Text style={{fontSize: '20px'}}>
                   {
                     props.datos &&
                     <Card.Text style={{fontSize: '20px'}}> {props.data.description} </Card.Text>
                    }
                
                </Card.Text>
                    <h3>${props.data.price} </h3>
                </Card.Body>
                <Card.Footer>
                <Button  onClick={() => setMensaje('Gracias por su compra')} variant="primary" block >Comprar</Button> 
                {
                    props.buttons &&
                   <Button variant="secondary" block >
                        
                        <Link to={'/producto/'+props.id} style = {{textDecoration:'none', color: '#FFF'}}>Ver Detalle</Link></Button>
                } 

                <small  style= {{color: 'red', fontSize: '15px' ,textAlign: 'center', margin:'auto'}}>{mensaje}</small>
                </Card.Footer>
            </Card>
    );
 } 
export default ProductoDetalle;
