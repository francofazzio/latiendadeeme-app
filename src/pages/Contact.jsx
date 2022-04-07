import { useState } from 'react'
import { Container } from "react-bootstrap"
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
        <Container className="container-general">
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                        <input type="text" onKeyDown={handleChange} value={value} placeholder='Nombre'/>
                        <input type="text" placeholder='Apellido'/>
                        <input type="mail" placeholder='mail'/>

                        <Button onClick={resetForm}>Limpiar Formulario</Button>
                        <Button type="submit">Enviar</Button>
            </form>
        </Container>
    )
}
export default ContactPage