import axios, { AxiosResponse } from 'axios'
import { StockItemTypes } from '../types'


type CreateStockResponse = StockItemTypes
type UpdateStockResponse = StockItemTypes

export const fetchStocks = async () => {
    try {
        const response = await axios.get('/api/stocks')
        return response.data
    } catch (error) {
        console.error('Failed to fetch stocks:', error)
        throw error
    }
}

export const createStock = async (stock: StockItemTypes): Promise<CreateStockResponse> => {
    try {
        const response: AxiosResponse<CreateStockResponse> = await axios.post('/api/stocks', stock)
        return response.data
    } catch (error) {
        console.error('Failed to create stock:', error)
        throw error
    }
}

export const deleteStock = async (stockId: string): Promise<void> => {
    try {
        await axios.delete(`/api/stocks/${stockId}`)
    } catch (error) {
        console.error('Failed to delete stock:', error)
        throw error
    }
}

export const updateStock = async (
    stockId: string,
    updatedStock: StockItemTypes
): Promise<UpdateStockResponse> => {
    try {
        const response: AxiosResponse<UpdateStockResponse> = await axios.put(`/api/stocks/${stockId}`, updatedStock)
        return response.data
    } catch (error) {
        console.error('Failed to update stock:', error)
        throw error
    }
}