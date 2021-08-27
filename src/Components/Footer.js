import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { FaReact } from "react-icons/fa";

const Footer = (props) => {
    return (
        
        <Navbar sticky="bottom"  bg="dark" variant="dark" style={{justifyContent: 'space-between'}}>
            <Navbar.Brand size="sm">< FaReact/></Navbar.Brand>
            <Navbar.Brand >Hernan Vaglio Trabajo Final </Navbar.Brand>
        </Navbar>
    );
}

export default Footer;