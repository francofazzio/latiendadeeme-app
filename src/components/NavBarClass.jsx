import React from 'react'
import Button from '@mui/material/Button';
import  logo from "../assets/logo1234.jpeg"
export default class NavBarClass extends React.Component {
    render(){
        return(
            <header className='main-header'>
            <div className='container-logo'>
            <img
            src={logo}
            className="img-header"/>
            </div>
            <ul className='navbar'>
              <li><Button variant="contained">Home</Button></li>
              <li><Button variant="contained" >Productos</Button></li>
              <li><Button variant="contained">Nosotros</Button></li>
              <li><Button variant="contained">Contacto</Button></li>
            </ul>
          </header>
          
        )
    }

}