import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import {Button}  from 'react-bootstrap';


const styles={
    spinner:{
        marginRight:"5px",
    },
    buttons:{
        margin:"auto"
    }
}
const BotonCarga = (props) => {
    return (

 
        <Button variant="dark" syle={styles.buttons} type={props.type?props.type:"submit"}>
            {
                props.loading &&
                <Spinner  animation="border"  variant="whaith" size="sm" style={styles.spinner} />
            }
            {props.text || "Ingresar"}
        </Button>  
    );
}

export default BotonCarga;
