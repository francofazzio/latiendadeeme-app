import React,{ useState, useEffect } from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useNavigate } from 'react-router-dom'


export default function Card({ data }) {
    const navigate = useNavigate();
    const {title, price, talle,stock, image, id} = data
    const [ count, setCount ] = useState(1)
    const [ countTest, setCountTest ] = useState(1)
    
    useEffect( () => {
        console.log("useEffect")
        const onScrollWindow = () => {
            if(window.scrollY > 100 ){
                console.log("Scroll mayor a 100")
            }
        }
        window.addEventListener("scroll", onScrollWindow)
        
        return () => {
            window.removeEventListener("scroll", onScrollWindow)
        }
        
    }, [])

    const changePage = () => {
        navigate(`/productos/${id}`)
    }

    const addToCart = (e) => {
        e.stopPropagation() 
        console.log("Agrego al carrito")
    }

    const addStock = () => {
        setCount(count + 1)
    }
    const removeStock = () => {
        setCountTest(countTest - 1)
    }
    
    return(
       
        <div className="card-item" onClick={changePage}>
                <img src={`./${image}`} alt={image} />
                <div className='container-card-data'>
                    <h2>{title}</h2>
                    <p>Precio : $ {price}</p>
                    <p>Talle : {talle}</p>
                    <button onClick={addToCart} className="btn-custom">Comprar</button>
            </div>
            
        
        </div>
    )
}