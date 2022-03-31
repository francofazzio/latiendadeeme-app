import { useState, useEffect} from 'react';
import Card from '../Card/Card'
import mockProductos from '../../Utils/productsMock'

const ListProducts = ({children}) => {
    

    const [products, setProducts] = useState([])

  
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout( ()=> {
                return resolve(mockProductos)
            }, 2000);
        });
        };
        useEffect( () => {
            getProducts().then( (productos) => {
                setProducts(productos)
            
            })  
        }, [])
       
    return(
        <div className="container-cards">
         <h2> {children} </h2>
         {products.map ( (product) => {
        const {id} = product
             return(
        <Card data={product} key={id}/>
             )
         } )}
        </div>
    )
}
export default ListProducts;                
