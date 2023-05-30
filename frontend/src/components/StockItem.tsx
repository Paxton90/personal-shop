import { useState } from "react"
import { Card } from "react-bootstrap"
import { ItemModal } from "./ItemModal"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import { StockItemTypes } from "../types"

type StockItemProps = {
    item: StockItemTypes
}

export function StockItem({ item }: StockItemProps) {
    const { _id, name, imageUrls, price } = item
    const [ showItemModal, setShowItemModal ] = useState(false)

    const handleClick = () => {
        setShowItemModal(true)
    }

    const handleClose = () => {
        setShowItemModal(false)
    }

    const { cartItems } = useShoppingCartContext()
    const quantityInCart = cartItems.find(item => item._id === _id)?.quantity
    const showCartQuantity = () => {
        if(quantityInCart ?? 0 > 0) {
            return (
                <div className="rounded-circle bg-warning" style={{ position: "absolute", color: "rgba(0,0,0,0.9)", width: "1.4rem", height: "1.4rem", left: "calc(100% - 38px)"}}>
                    <div style={{ textAlign: "center", transform: "translate(0, -10%)"}}>
                        {quantityInCart}
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <Card onClick={handleClick} border="light" className="p-3" style={{ cursor: 'pointer' }}>
                {showCartQuantity()}
                <Card.Img variant="top" src={imageUrls[0]} height="250px" style={{ objectFit: "contain" }} />
                <Card.Title className="mt-5">
                    <span className="fs-4" style={{ whiteSpace: "pre-line" }}>
                        {name}
                    </span>
                </Card.Title>
                <Card.Subtitle className="">
                    <span className="fs-5">{formatCurrency(price)}</span>
                    <br />
                    {/* <span className="fs-5 text-muted">庫存 {countInStock}</span> */}
                </Card.Subtitle>
            </Card>
            <ItemModal item={item} show={showItemModal} handleClose={handleClose} />
        </>
    )
}
