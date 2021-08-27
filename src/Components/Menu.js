import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NetContext from "../Context/NetContext";
import {BsPersonDash, BsPeopleCircle,BsPersonPlus, BsHouseDoor } from "react-icons/bs";

const styles = {
  colorLink:{
    color: '#fff',
    fontSize: '20px', 
    textAlign: 'center'
  }
  
}

const Menu = (props) => {
  return (
    <NetContext.Consumer>
      { 
        context=>(
            <Navbar bg="dark" variant="dark" style={{justifyContent: 'space-between'}} >
                    {
                      context.login && 
                      <>
                      <Navbar.Brand style={styles.colorLink}>E-commerce <br/> Bienvenido: {context.email}</Navbar.Brand> 
                      <Nav>
                       <Nav.Link as={Link}  to="/" style={styles.colorLink}  > <BsHouseDoor/> <br/> Home </Nav.Link> 
                       <Nav.Link onClick={context.logoutUser} style={styles.colorLink}><BsPersonDash/> <br/> LogOut </Nav.Link> 
                       </Nav>
                      </ >
                    }
                    {
                      !context.login &&
                      <> 
                        <Navbar.Brand style={styles.colorLink}>E-commerce </Navbar.Brand> 
                        <Nav>
                        <Nav.Link as={Link}  to="/Registro" style={styles.colorLink} ><BsPersonPlus/> <br/> Registro </Nav.Link>
                        <Nav.Link as={Link}  to="/Login" style={styles.colorLink}><BsPeopleCircle/>  <br/>  Login </Nav.Link>
                        </Nav>
                      </ >
                    }

            </Navbar>
      )}
    </NetContext.Consumer>
  );
}

export default Menu;
