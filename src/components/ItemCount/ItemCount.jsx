import ItemDetail from '../ItemDetail/ItemDetail';
import React,{useState} from 'react'
const ItemCount = ({ stock, addProduct }) => {
const [count, setCount] = useState(1);

 const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert('Stock limitado');
      console.log({ stock });
    }
  };

  const onSub = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      console.log({ stock });
    }
  };

    return(
           <>
            <button onClick={onSub} >-</button>
            <p>{count}</p>
            <button onClick={onAdd}>+</button>
        
         <div>
         <button onClick={() => addProduct(count)}>
               Comprar
             </button>
             
             </div>
             </>
    );
};

export default ItemCount