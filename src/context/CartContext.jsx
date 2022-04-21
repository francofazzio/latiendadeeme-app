import { createContext, useState, useEffect } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        if(cartProducts.length){
            calculeTotalPrice();
        }else{
            setTotal(0);
        }
      
    }, [ cartProducts ])
    

    const addProductToCart = (product) => {
        let exist = cartProducts.find(cartProduct => cartProduct.id === product.id)
        !exist && setCartProducts(cartProducts => [...cartProducts, product])
        localStorage.setItem("productos",JSON.stringify([...cartProducts, product]))
    }
    const calculeTotalPrice = () => {
        let summary = 0;
        cartProducts.forEach((cartProduct) => 
            summary = cartProduct.price + summary
         );

        setTotal(summary); 
        
    }

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
    }

    const data = {
        cartProducts,
        addProductToCart,
        total,
        deleteProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext