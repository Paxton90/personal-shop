import React, { createContext, useContext, useState } from 'react'
import { ShoppingCart } from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { CartItemTypes } from '../types'


type ShoppingCartContextType = {
    openCart: () => void
    closeCart: () => void
    cartItems: CartItemTypes[]
    addToCart: (item: CartItemTypes) => void
    removeFromCart: (itemId: string) => void
    increaseItemQuantity: (itemID: string) => void
    decreaseItemQuantity: (itemID: string) => void
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
    openCart: () => { },
    closeCart: () => { },
    cartItems: [],
    addToCart: () => { },
    removeFromCart: () => { },
    increaseItemQuantity: () => { },
    decreaseItemQuantity: () => { }
})

export const useShoppingCartContext = () => useContext(ShoppingCartContext)

type ShoppingCartProviderProps = {
    children: React.ReactNode
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItemTypes[]>("shopping-cart", [])

    const openCart = () => {
        setIsCartOpen(true)
    }

    const closeCart = () => {
        setIsCartOpen(false)
    }

    const addToCart = (item: CartItemTypes) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i._id === item._id)

            if (existingItem) {
                const updatedItems = prevItems.map((i) =>
                    i._id === item._id ? { ...i, quantity: i.quantity + item.quantity } : i
                )
                return updatedItems
            }

            return [...prevItems, item]
        })
    };

    const removeFromCart = (itemId: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId))
    }

    const increaseItemQuantity = (itemId: string) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item._id === itemId) {
                    const newQuantity = item.quantity + 1
                    return { ...item, quantity: Math.min(newQuantity, 99) }
                }
                return item;
            })
        )
    }

    const decreaseItemQuantity = (itemId: string) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) => {
                    if (item._id === itemId) {
                        const newQuantity = item.quantity - 1
                        return { ...item, quantity: newQuantity }
                    }
                    return item
                })
                .filter((item) => item.quantity >= 1)
        )
    }

    const contextValue = {
        cartItems,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        increaseItemQuantity,
        decreaseItemQuantity
    }

    return (
        <ShoppingCartContext.Provider value={contextValue}>
            {children}
            <ShoppingCart isCartOpen={isCartOpen}></ShoppingCart>
        </ShoppingCartContext.Provider>
    )
}
