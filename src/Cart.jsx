import { useState, useMemo } from "react"

export default function ShoppingCart() {

    const [cartItems, setCartItems] = useState ([
        
        {
            nameOfProduct : "Blender",
            price: 10,
            qty : 2,
            id : 1
        },
        {
            nameOfProduct : "Oven",
            price: 30,
            qty : 5,
            id : 2
        },
        {
            nameOfProduct : "Table",
            price: 1,
            qty : 3,
            id : 3,
        }
    ])
    const [dicountCode, setDiscountCode] = useState ("")

    // Calculate Total Price
    const totalAmount = useMemo (() => {
        let totalPrice = 0
        cartItems.forEach ((item) => {
            totalPrice += item.price * item.qty
        })
        return totalPrice
    }, [cartItems])

    // Add Quantity Function 
    const addQuantity  = (id, newQty) => {
      const update =  cartItems.map((item) => 
            item.id === id ? {...item, qty : newQty} : item
        )

        setCartItems(update)
    }


    return (
        <div>
            <h2> Shopping Cart</h2>
            <div>
                {cartItems.map((item ) => (
                    <div key ={item.id}>
                    Product Name: {item.nameOfProduct} | Price: {item.price} | Qty: {item.qty} : 
                    <button onClick = {() => addQuantity(item.id, item.qty + 1)}>Add +</button>
                    </div> 
                ))}
            </div>

            <h4>Total Price: {totalAmount}</h4>

            {/* Discount Code Section */}
            <input 
            type="text"
            placeholder="Enter Discount Code" 
            name= "discount"
            value= {dicountCode}
            style= {{marginTop: "2rem"}}
            onChange={(e) => setDiscountCode (e.target.value)}
            />
        </div>
    )
}