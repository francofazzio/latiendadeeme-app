import card from '../Card/Card'
const ListProducts = ({children}) => {
   
    return(
        <div className="container-cards">
            <h2> {children} </h2>
    <Card title={'Magnolia intermedio'} talle='XL' price={200} />
    <Card title='Pasteles' talle='XL' price={200}/>
    <Card title='Magnolia Lycra' talle='XL' price={200} />
    <Card title='Jazmin bordado' talle='XL' price={200} />
    <Card title='Hombres' talle='XL' price={200}/>
    <Card title='Escolares' talle='XL' price={200} />
    <Card title='falta' talle='XL' price={200} />
    <Card title='falta' talle='XL' price={200} />
    <Card title='falta' talle='XL' price={200} />
    
        </div>
    )
}
export default ListProducts;