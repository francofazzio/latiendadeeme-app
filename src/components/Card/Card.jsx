import React,{ useState } from 'react'
import './Card.css'

export default function Card({ data }) {
    const {title, price, talle, stock, image} = data
    const [ count, setCount ] = useState(1)
    const [Stock, setStock] = useState(10)
    
    console.log("estado Contador", count)

    const addStock = () => {
        setCount(count + 1)
    }
    const removeStock = () => {
        setCount(count - 1)
    }

    return(
        <div className="card-item">
            <img src={'././${image}'} alt={image} />

            <div className='container-card-data'>
            <h2>{title}</h2>
            <p>Precio : $ {price}</p>
            <p>Talle : {talle}</p>
            <button onClick={removeStock}> Quitar Stock </button>
            <p>Stock : {count}</p>
            <button onClick={addStock}> Agregar Stock </button>
        </div>
        </div>
    )
}