import React, {useState, useEffect} from 'react'
import ProductoDetalle from '../Components/ProductoDetalle'
import BotonCarga from '../Components/BotonCarga'
import firebase from '../Config/firebase';

const Producto = (props) => {
   //Definicion de estados
    const[producto,setProducto] = useState ({})
    const[loading, setLoading] = useState (true);
  //Definicion de variables

  // Definicion Funciones

  //Definicion de hooks
    useEffect(() => {
            firebase.db.doc("productos/"+props.match.params.id)
            .get()
            .then(doc=>{
                setProducto(doc.data());
                setLoading(false);
            })
      }, [props.match.params.id]);


    //Render
    if (loading) {
        return (
            <BotonCarga text={"Cargando"} loading={loading}/>
            )
    }else{
        return (
            <div>
                <ProductoDetalle data= {producto} datos={true}/>
            </div>
            )
    }
}

export default Producto;