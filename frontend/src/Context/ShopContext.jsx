import React, { createContext, useEffect } from "react";
import { useState } from "react";


export const ShopContext = createContext(null)

const url = 'https://ecommerce-backend-zsxd.onrender.com'

const getDefault = ()=>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props)=>{
    const [all_product,setAll_Product] = useState([]);
    const [cartItems,setCartItems] = useState(getDefault());

    useEffect(()=>{
        fetch(`${url}/allproducts`).then((response)=>response.json()).then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch(`${url}/getcart`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json()).then((data)=>setCartItems(data))
        }
    },[])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    
        if (localStorage.getItem('auth-token')) {
            fetch(`${url}/addtocart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
            .then((response) => response.text())
            .then((text) => {
                try {
                    const data = JSON.parse(text);
                } catch (err) {
                    
                }
            })
            .catch((error) => console.error("Error:", error));
        }
    };
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    
        if (localStorage.getItem('auth-token')) {
            fetch(`${url}/removefromcart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
            .then((response) => response.text())
            .then((text) => {
                try {
                    const data = JSON.parse(text);
                } catch (err) {
                
                }
            })
            .catch((error) => console.error("Error:", error));
        }
    };
    
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.new_price*cartItems[item]
            }
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let toalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                toalItem +=1;
            }
        }
        return toalItem;
    }
    const contextValue ={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return ( <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider> )
    
}
export default ShopContextProvider;
