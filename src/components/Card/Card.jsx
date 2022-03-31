import React,{ useState } from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'


export default function Card({ data }) {
    const {title, price, talle,stock, image} = data
    const [ count, setCount ] = useState(1)
    const [ countTest, setCountTest ] = useState(10)
    
    console.log("estado Contador", count)


    const addStock = () => {
        setCount(count + 1)
    }
    const removeStock = () => {
        setCountTest(countTest - 1)
    }

    return(
        <div className="card-item">
             
            <img src= {`./${image}`} alt={image} />

            <div className='container-card-data'>
            <h2>{title}</h2>
            <p>Precio : $ {price}</p>
            <p>Talle : {talle}</p>
            <button>Comprar</button>
        <ItemCount />
        </div>
        </div>
    )
}