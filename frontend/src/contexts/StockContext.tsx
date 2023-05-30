import React, { createContext, useContext, useEffect, useState } from 'react'
import { fetchStocks, createStock, deleteStock, updateStock } from '../services/StockService'
import { StockItemTypes } from '../types'
import { Spinner } from 'react-bootstrap'

type StockContextTypes = {
    stocks: StockItemTypes[]
    createStock: (stock: StockItemTypes) => Promise<void>
    deleteStock: (stockId: string) => Promise<void>
    updateStock: (stockId: string, updatedStock: StockItemTypes) => Promise<void>
}

const StockContext = createContext<StockContextTypes>({
    stocks: [],
    createStock: () => Promise.resolve(),
    deleteStock: () => Promise.resolve(),
    updateStock: () => Promise.resolve(),
})

type StockProviderProps = {
    children: React.ReactNode
}

export const useStockContext = () => useContext(StockContext)

export const StockProvider: React.FC<StockProviderProps> = ({ children }) => {
    const [stocks, setStocks] = useState<StockItemTypes[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const stocksData = await fetchStocks()
                setStocks(stocksData)
            } catch (error) {
                console.error('Failed to fetch stocks:', error)
            }
            setIsLoading(false)
        }

        fetchData()
    }, [])

    const createStockHandler = async (stock: StockItemTypes) => {
        try {
            const createdStock = await createStock(stock)
            setStocks((prevStocks) => [...prevStocks, createdStock])
        } catch (error) {
            console.error('Failed to create stock:', error)
        }
    }

    const deleteStockHandler = async (stockId: string) => {
        try {
            await deleteStock(stockId)
            setStocks((prevStocks) => prevStocks.filter((stock) => stock._id !== stockId))
        } catch (error) {
            console.error('Failed to delete stock:', error)
        }
    }

    const updateStockHandler = async (stockId: string, updatedStock: StockItemTypes) => {
        try {
            const updated = await updateStock(stockId, updatedStock)
            setStocks((prevStocks) =>
                prevStocks.map((stock) => (stock._id === stockId ? updated : stock))
            )
        } catch (error) {
            console.error('Failed to update stock:', error)
        }
    }

    if (isLoading) {
        return (
            <div className="spinner-container">
                <Spinner className="spinner" />
            </div>
        )
    }

    const contextValue: StockContextTypes = {
        stocks,
        createStock: createStockHandler,
        deleteStock: deleteStockHandler,
        updateStock: updateStockHandler,
    }

    return <StockContext.Provider value={contextValue}>{children}</StockContext.Provider>
}
