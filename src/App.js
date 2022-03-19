
import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import {Button} from'react-bootstrap';
import NavBar from './components/NavBar/NavBar'
//import NavBarClass from'./components/NavBarClass'//
import ListProducts from './components/ListProducts/ListProducts';
function App() {
  return (
    <div className="App">
    <NavBar />
    {/*<p>Class component:</p>
    <NavBarClass /> */}
    <ListProducts>
    <p>Nuestros Productos</p>
    </ListProducts>  
    </div>

  );
}

export default App;
