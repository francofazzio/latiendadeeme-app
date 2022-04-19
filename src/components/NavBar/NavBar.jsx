import { useState, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ThemeSwitch from './ThemeSwitch'
import ThemeContext from '../../context/ThemeContext';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase';


function NavBar(props) {
    const { ligthTheme, handleTheme } = useContext(ThemeContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const [routes, setRoutes] = useState([])
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        getRoutes()
    },[])

    const getRoutes = async() => {
        const routesCollection = collection(db, 'rutas')
        const routesSnapshot = await getDocs(routesCollection)
        const routesList = routesSnapshot.docs.map( (doc) => {
        console.log("routes document: ", doc.data())
        return doc.data()
        } )
        setRoutes(routesList)
     
    }

    console.log("Light state: " , ligthTheme)
    
    return(
        //JSX
        //
        <header className={`main-header ${ligthTheme ? 'light-mode' : 'dark-mode'}`}> 
            <div className='container-logo'>
                {ligthTheme ? (
                    <img src="../logo1234.jpeg" className="img-header"/>
                ) : (
                    <img src="../logo1234.jpeg" className="img-header"/>
                ) }
            </div>
            <ul className='navbar'> 
                {routes.map((page) => {
                    return(
                        page.title === 'Productos' ? (
                        <li>
                            <Button 
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >{ page.title }</Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link to={'/ellas'}>Ellas</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to={'/ellos'}>Ellos</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to={'/escolares'}>Escolares</Link>
                                </MenuItem>
                            </Menu> 
                        </li>
                        ) : (
                        <li>
                            <Button className="custom-btn" variant="contained">
                                <Link to={page.url}>{page.title}</Link>
                            </Button>
                        </li>
                        )
                        
                    )
                })}
            </ul>
            <ThemeSwitch />
            <CartWidget />
        </header>
    )
}

export default NavBar