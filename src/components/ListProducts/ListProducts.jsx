import { useState, useEffect, useContext} from 'react';
import Card from '../Card/Card'
import mockProductos from '../../Utils/productsMock'
import { useParams } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

    const ListProducts = ({children}) => {
    
        const { lightTheme } = useContext(ThemeContext)
     
        const { category } = useParams()

    const [products, setProducts] = useState([])

  
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout( ()=> {
                return resolve(mockProductos)
            }, 2000);
        });
        };
        useEffect( () => {
            setProducts([])
            getProducts().then( (productos) => {
                category ? filterProductByCategory(productos, category) : setProducts(productos)
            })
        }, [category])
    
    
        const filterProductByCategory = (array , category) => {
            return array.map( (product, id) => {
                if(product.category === category) {
                   return setProducts(products => [...products, product]);
                }
            })
        }
            
    
       
    return(
        <div className={`container-cards ${lightTheme ? 'light-mode' : ''}`}>
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
