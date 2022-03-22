import Card from '../Card/Card'

const ListProducts = ({children}) => {
    let dataProduct = {
        title : 'Magnolia Intermedio',
        talle: 'XL',
        price : 1500
    }
   
    return(
        <div className="container-cards">
            <h2> {children} </h2>
    <Card data={dataProduct} />

        </div>
    )
}
export default ListProducts;