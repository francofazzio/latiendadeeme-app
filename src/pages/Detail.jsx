import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockProductos from '../Utils/productsMock'

const DetailPage = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductById(mockProductos, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }
    
    return(
        <Container className='container-general'> 
            <div className='container-detail'>
            <div className='container-detail__img'>
                <img src={`../${product.image}`} alt="moño" />
            </div>
            <div className='container-detail__info'>
                <h3 className='info__title'>{product.title}</h3>
                <p className='info__subtitle'>PRECIO</p>
                <p className='info__text'>$ {product.price}</p>
                <p className='info__subtitle'>TALLE</p>
                <p className='info__text'>{product.talle}</p>
                
                  
                 </div>  
                <p className='info__subtitle'>DETALLE</p>
                <p className='info__text detail__text'>A cada moño podes hacerle tu bordado especial tambien podes elegir tu color favorito</p>
                <Button className='detail__btn-buy'>COMPRAR</Button>
            </div>
            
        </Container>
    )
}

export default DetailPage