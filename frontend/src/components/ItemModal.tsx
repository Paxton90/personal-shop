import { Modal, Button, Carousel } from 'react-bootstrap'
import { XCircle } from 'react-bootstrap-icons'
import { formatCurrency } from '../utilities/formatCurrency'
import { useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { StockItemTypes } from '../types'

type ItemModalProps = {
    item: StockItemTypes,
    show: boolean,
    handleClose: () => any
}

export function ItemModal({ item, show, handleClose }: ItemModalProps) {
    const { imageUrls, name, description, price } = item
    const { addToCart } = useShoppingCartContext()

    const handleAddToCart = () => {
        addToCart({ _id: item._id, quantity: 1 })
        handleClose()
    }

    return (
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
            <Modal.Body>
                <div className='d-flex justify-content-end'>
                    <Button variant="link" className="close-btn" onClick={handleClose}>
                        <XCircle className='closeIcon' color='secondary' size={24} />
                    </Button>
                </div>
                <ItemCarousel imageUrls={imageUrls} />
                <div className="mt-3" style={{ whiteSpace: "pre-line" }}>
                    <span className="fs-2">{name}</span><br />
                    <span className="fs-3">{formatCurrency(price)}</span><br /><br />
                    <span className="fs-5">{description}</span>
                </div>
                <div className='mt-4 d-grid gap-2'>
                    <Button variant="secondary" onClick={handleAddToCart}>新增至購物車</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

type ItemCarouselProps = {
    imageUrls: string[]
};

function ItemCarousel({ imageUrls }: ItemCarouselProps) {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <Carousel variant="dark" interval={null} className='itemCarousel' style={{ width: "600px", height: "400px" }}>
                {imageUrls.map((imageUrl, index) => (
                    <Carousel.Item key={index}>
                        <div className="image-container">
                            <img src={imageUrl} alt={`Image ${index}`} height="400px" style={{ objectFit: "contain" }} />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
