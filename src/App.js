import React from 'react';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import Producto from './Pages/Producto';
import {BrowserRouter,Route} from "react-router-dom";
import firebase from './Config/firebase';
import GlobalState from "./Context/GlobalState";

function App() {
  //Definicion de estados

  //Definicion de variables
  
  // Definicion Funciones
  
  //Definicion de hooks
  
  //Render
  return (
             <GlobalState>
                <BrowserRouter>
                    <Menu />
                    {console.log(firebase.database())}
                    <Route path="/" component={Home} exact />
                    <Route path="/Registro" component={Registro} exact />
                    <Route path="/Login" component={Login} exact />
                    <Route path="/Producto/:id" component={Producto} exact />
                    <Footer />  
                </BrowserRouter>   
             </GlobalState>      

  );
}

export default App;
