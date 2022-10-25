import AddPostForm from "../../features/AddPostForm/AddPostForm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const PostAdd = () => {
    return (
        <Row className="d-flex justify-content-center">
            <Col xs="12" lg="5">
                <h2>PostAdd</h2> 
                <AddPostForm />
            </Col>
        </Row>
    )
}

export default PostAdd;