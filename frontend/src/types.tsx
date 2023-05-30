export type StockItemTypes = {
    _id: string
    brand: string
    name: string
    imageUrls: string[]
    price: number
    description: string
    countInStock?: number
}

export type CartItemTypes = {
    _id: string
    quantity: number
}

export type UserData = {
    _id: string
    name: string
    email: string
    isAdmin: boolean
}