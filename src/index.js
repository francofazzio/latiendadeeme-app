import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let producto = {
nombre: 'Moños',
categoria:'',
color: '',
}
const{ nombre, categoria, color } = producto;

console.log('El nombre es:', nombre);
console.log('El nombre es:', categoria);
console.log('El nombre es:', color);

