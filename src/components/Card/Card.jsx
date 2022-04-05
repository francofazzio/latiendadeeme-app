import React,{ useState } from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useNavigate } from 'react-router-dom'


export default function Card({ data }) {
    const navigate = useNavigate();
    const {title, price, talle,stock, image, id} = data
    const [ count, setCount ] = useState(1)
    const [ countTest, setCountTest ] = useState(1)
    


    const addStock = () => {
        setCount(count + 1)
    }
    const removeStock = () => {
        setCountTest(countTest - 1)
    }
    const changePage = () => {
        navigate(`/productos/${id}`)
    }
    return(
       
        <div className="card-item" onClick={changePage}>
                <img src={`./${image}`} alt={image} />
                <div className='container-card-data'>
                    <h2>{title}</h2>
                    <p>Precio : $ {price}</p>
                    <p>Talle : {talle}</p>
            <button>Comprar</button>
            </div>
            
        
        </div>
    )
}