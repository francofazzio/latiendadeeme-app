import { useState, useEffect} from 'react';
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    
    const mockProductos = [{
        id: 1,
        title : 'Magnolia Intermedio',
        talle : 'XL',
        price : 1500,
        image: 'moño6.jpeg',
        stock: 8
    },
    {
        id: 2,
        title : 'Pasteles',
        talle : 'XL',
        price : 1500,
        image : 'moño5.jpeg',
        stock : 8
        
    },
    {     
        id: 3,
        title : 'Magnolia Lycra',
        talle : 'XL',
         price : 1500,
         image:'moño4.jpeg',
         stock : 8
         

    },
    { 
        id:4,
        title : 'Jazmin Bordado Especial',
        talle : 'XL',
         price : 1500,
         image: 'moño3.jpeg',
         stock : 8
        
    },
    { 
        id:4,
        title : 'Ellos',
        talle : 'XL',
         price : 1500,
         image: 'moño2.jpeg',
         stock : 8
        
    },
    { 
        id:4,
        title : 'Escolares',
        talle : 'XL',
         price : 1500,
         image: 'moño1.jpeg',
         stock : 8
        
    },
]
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
