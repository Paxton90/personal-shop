import { Col, Row } from "react-bootstrap";
import { StockItem } from "../components/StockItem";
import { useStockContext } from "../contexts/StockContext";


export function Store() {
    const { stocks } = useStockContext()

    return (
        <>
            <Row xs={1} md={2} lg={3} className="mt-3 g-4">
                {stocks.map((item) => (
                    <Col key={item._id}>
                        <StockItem item={item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}