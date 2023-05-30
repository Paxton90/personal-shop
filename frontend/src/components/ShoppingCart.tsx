import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import { CartItem } from "./CartItem"
import { formatCurrency } from "../utilities/formatCurrency"
import { useStockContext } from "../contexts/StockContext"


type ShoppingCartProps = {
    isCartOpen: boolean
}

export function ShoppingCart({ isCartOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCartContext()
    const { stocks } = useStockContext()

    return (
        <Offcanvas show={isCartOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>購物車</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem _id={item._id} quantity={item.quantity} key={item._id} />
                    ))}
                </Stack>
                <div className="me-auto fw-bold fs-4 text-end mt-3">
                    總計: {" "}
                    {formatCurrency(cartItems.reduce((total, cartItem) => {
                        const item = stocks.find(i => i._id === cartItem._id)
                        return total + (item?.price || 0) * cartItem.quantity
                    }, 0))}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}