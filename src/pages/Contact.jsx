import { useState } from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const ContactPage = () => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Envio de nombre: ", value)
    }

    const handleChange = (e) => {
        console.log(e)
        setValue(e.target.value)
    }

    const resetForm = () => {
        setValue('')
        console.log("limpiar formulario")
    }

    return(
        <Container className='container-general help'> 

            <h2>Preguntas Frecuentes</h2>
            <div className='faq-section'>
                <section>
                    <h3>Consultas de stock</h3>
                    <h4>¿Hay stock de todos los productos?</h4>
                    <p>
                        Todos los productos que publicamos están en stock. En caso de agotarse algún talle o color, esa característica se bloqueará.
                    </p>
                    <h4>¿Hay algún límite de compra?</h4>
                    <p>
                        El único límite de compra que tenemos es el stock de nuestro E-Shop. Si deseás hacer una compra mayorista tenes que comunicarte por privado con nosotros.
                    </p>
                    <h5>¿Se puede elegir un diseño personalizado de algun moño?</h5>
                    <p>
                        Podras elegir tu moño personalizado, escribiendonos y mandando por privado el diseño, el precio sera acorde a lo que el cliente solicite
                    </p>
                </section>
                <section>
                    <h3>Envío y seguimiento</h3>
                    <h4>¿Puede recibir el/los moños  otra persona?</h4>
                    <p>Tu pedido puede ser recibido por cualquier persona mayor de 18 años que se encuentre en el domicilio.</p>
                    <h4>¿Cuándo voy a recibir mi pedido?</h4>
                    <p>Los pedidos son entregados a través de los cadetes o correo si esta fuera de la ciudad de Santa Fe.</p>
                    <h4>¿Qué pasa si no hay nadie cuando traen mi pedido?</h4>
                    <p>Si no hay nadie en el domicilio que nos indicaste, el correo regresará a las 48 horas. En caso de no encontrar a nadie, deberás dirigirte al centro de distribución asignado a tu pedido dentro de las 72 horas con tu DNI y el código que te enviamos.</p>
                </section>
                <section>
                    <h3>Contacto</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onKeyDown={handleChange} value={value} placeholder='Nombre'/>
                        <input type="text" placeholder='Apellido'/>
                        <input type="mail" placeholder='mail'/>

                        <Button onClick={resetForm}>Limpiar Formulario</Button>
                        <Button type="submit">Enviar</Button>
                    </form>
                </section>
            </div>
        </Container>
    )
}

export default ContactPage