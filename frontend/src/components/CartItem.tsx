import { Stack } from "react-bootstrap"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItemTypes } from "../types"
import { useStockContext } from "../contexts/StockContext"


export function CartItem({ _id, quantity }: CartItemTypes) {
    const { removeFromCart, increaseItemQuantity, decreaseItemQuantity } = useShoppingCartContext()
    const { stocks } = useStockContext()
    const item = stocks.find(i => i._id === _id)
    if (item == null) return null
    return (
        <Stack direction="horizontal" gap={1} className="d-flex align-item-center mt-3">
            <img src={item.imageUrls[0]} style={{ width: "125px", height: "75x", objectFit: "contain" }} />
            <div className="me-auto">
                <div>
                    {item.name}
                </div>
                <div className="text-muted">
                    {formatCurrency(item.price)}
                </div>
                <div style={{ fontSize: "1.5rem", opacity: "0.8", userSelect: "none" }}>
                    數量
                    <button onClick={() => decreaseItemQuantity(_id)} className="cart-minus-btn">
                        -
                    </button>
                    {quantity}
                    <button onClick={() => increaseItemQuantity(_id)} className="cart-plus-btn">
                        +
                    </button>
                </div>
            </div>
        </Stack>
    )
}