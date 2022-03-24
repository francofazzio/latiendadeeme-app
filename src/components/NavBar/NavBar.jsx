import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import Card from '../Card/Card';
import './NavBar.css'
function NavBar(props){
    return(
        <header className='main-header'>
        <div className='container-logo'>
        <img
        src="logo1234.jpeg"
        className="img-header"/>
        </div>
        <ul className='navbar'>
          <li><Button variant="contained">Home</Button></li>
          <li><Button variant="contained" >Productos</Button></li>
          <li><Button variant="contained">Nosotros</Button></li>
          <li><Button variant="contained">Contacto</Button></li>
        </ul>
        <CartWidget />
      </header>
      
    )
    
}

export default NavBar