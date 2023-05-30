
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { BackendStocks } from '../components/BackendStocks';

export function Backend() {
    return (
        <div className='mt-5'>
            <Tab.Container defaultActiveKey="stocks">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="stocks">商品</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="stocks">
                                <BackendStocks />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}