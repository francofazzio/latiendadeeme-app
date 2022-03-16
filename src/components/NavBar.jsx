import Button from '@mui/material/Button';
import  logo from "../assets/logo1234.jpeg"
function NavBar(){
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

export default NavBar