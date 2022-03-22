import React,{ useState } from 'react'
import './Card.css'

export default function Card({ data }) {
    const {title, price, talle} = data
    const [ count, setCount ] = useState(1)
    const [stock, setStock] = useState(10)

    
    console.log("estado Contador", count)

    const addStock = () => {
        if(count < stock){
         setCount(count + 1) 
        }
        
    }
    const removeStock = () => {
        setCount(count - 1)
    }

    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Precio : $ {price}</p>
            <p>Talle : {talle}</p>
            <button onClick={removeStock}> Quitar Stock </button>
            <p>Stock : {count}</p>
            <button onClick={addStock}> Agregar Stock </button>
        </div>
    )
}