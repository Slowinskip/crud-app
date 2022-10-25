import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const ModalDelete = (props) => {
    console.log(props.showModal);

    return (
        <Modal show={props.showModal} onHide={props.handleCloseModal}>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Are you sure?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseModal}>
                    Close
                </Button>
                <Button variant="danger" onClick={props.handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDelete;