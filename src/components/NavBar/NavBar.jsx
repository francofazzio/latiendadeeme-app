import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import Card from '../Card/Card';
import './NavBar.css'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

function NavBar(props){
  const pages = [
    {
        title:'Home',
        url: '/'
    },
    {
        title:'Nosotros',
        url: '/nosotros'
    }, 
    {
        title: 'Productos',
        url: '/productos'
    },
    {
        title: 'Contacto',
        url: '/contacto'
    }]
    
  
  
  return(
        <header className='main-header'>
        <div className='container-logo'>
        <img
        src="logo1234.jpeg"
        className="img-header"/>
        </div>
        <ul className='navbar'>
                    <li>
                        <Button className="custom-btn" variant="contained">
                            <Link to={'/ellas'}>Ellas</Link>
                        </Button>     
                    </li>
                    <li>
                        <Button className="custom-btn" variant="contained">
                            <Link to={'/ellos'}>Ellos</Link>
                        </Button>     
                    </li>
                    <li>
                        <Button className="custom-btn" variant="contained">
                            <Link to={'/escolares'}>Escolares</Link>
                        </Button>     
                    </li>
        {pages.map((page) => {
            return(       
             <li>
               <Button className="custom-btn" variant="contained">
                 <Link to={page.url}>{page.title}</Link>
                  </Button>
             </li>
            )
          })}
        </ul>
        <CartWidget />
      </header>
      
    )
    
}

export default NavBar