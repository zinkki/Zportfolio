import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function BookModal({ bookId, bookinfo, show, onHide }) {
		return (
			<Modal
				show={show}
				onHide={onHide}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
    	>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {bookinfo[bookId].title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <img src={bookinfo[bookId].coverLargeUrl} alt="" />
        <h4>{bookinfo[bookId].title}</h4>
        <p>
          {bookinfo[bookId].author}/{bookinfo[bookId].publisher}
          <br />
          {bookinfo[bookId].priceStandard
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}₩
        </p>
        <p>{bookinfo[bookId].description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
		);
}
