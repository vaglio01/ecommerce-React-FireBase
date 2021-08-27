import instance from '../Config/axios'

export function getProductos(){
    return instance.get("/items")
}