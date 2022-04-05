import { Container } from "react-bootstrap"
import Button from '@mui/material/Button';
import { useState } from 'react'

const ContactPage = () => {
    return(
        <Container className="container-general">
            <h1>Contacto</h1>
            <form>
                <input type="text" placeholder='Nombre'/>
                <input type="text" placeholder='Apellido'/>
                <input type="mail" placeholder='Email'/>
                <button type="submit">Enviar</button>
            </form>
        </Container>
    )
}
export default ContactPage