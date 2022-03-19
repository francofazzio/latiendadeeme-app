import './Card.css'
export default function card({price , talle , title}){
    console.log("Precio: ", price)
    console.log("Titulo: ", title)
    console.log("Talle: ", talle)
    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Precio : $ {price}</p>
            <p>Talle : {talle}</p>
            <button> Comprar </button>
        </div>
    )
}