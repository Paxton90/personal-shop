import { useStockContext } from "../contexts/StockContext";

export function BackendStocks() {
    const { stocks } = useStockContext()
    return (
        <>
            <div>
                {stocks.map((stock) => (
                    <div key={stock._id}>{stock.name}</div>
                ))}
            </div>
        </>
    )
}