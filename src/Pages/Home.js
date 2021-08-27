import React, {useState, useEffect} from 'react'
import ProductoDetallejs from "../Components/ProductoDetalle"
import BotonCarga from '../Components/BotonCarga'
import firebase from '../Config/firebase';

const styles={
  carStyke:{
 
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
    
  }
}

const Home = () => {
   //Definicion de estados
    const [productos,setProductos] = useState ([])
    const [loading,setLoading] = useState (true);
  //Definicion de variables

  // Definicion Funciones

  //Definicion de hooks
   useEffect(() => {
        firebase.db.collection("productos")
        .get()
        .then(querySnapshot=>{
            setProductos(querySnapshot.docs);
            setLoading(false);
        }) 
  }, []);

  //Render
    if (loading) {
        return (

            <BotonCarga text={"Cargando"} loading={loading}/>
            )
    }else{
        return (
            <div className= "car-grid" style= {styles.carStyke}>
              {productos.map(producto=><ProductoDetallejs key = {producto.id} id={producto.id} data={producto.data()} buttons={true}/>)}
            </div>
            )
    }
}

export default Home;