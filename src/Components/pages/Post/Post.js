import { useDispatch, useSelector } from "react-redux";
import { useParams, Link,  Navigate  } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useState } from 'react';
import ModalDelete from "../../features/ModalDelete/ModalDelete";
import { removePost } from "../../../redux/postsRedux";
import { dateToStr } from "../../../utils/dateToStr";

const PostAdd = () => {

    const postId = useParams();
    const postData = useSelector(state => getPostById(state, postId.id))

    const [showModal, setshowModal] = useState(false);
    const handleShowModal = () => setshowModal(true);
    const handleCloseModal = () => setshowModal(false);

    const dispatch = useDispatch();

    const handleDelete = e => {
        e.preventDefault();
        console.log('+');
        dispatch(removePost( postId.id ));
        handleCloseModal();

    }


    if(!postData) return <Navigate to="/" />
    else return (
    <div>
      <ModalDelete showModal={showModal} handleDelete={handleDelete} handleCloseModal={handleCloseModal} />
      <Row className="d-flex justify-content-center">
        <Col xs="12" lg="5">
          <Card className="border-0">
            <Card.Body>
              <Card.Title>{postData.title}</Card.Title>
              <Card.Text className="mb-1"><b>Author:</b> {postData.author}</Card.Text>
              <Card.Text className="mb-1"><b>Published:</b> {dateToStr(postData.publishedDate)}</Card.Text>
              <Card.Text className="mb-1"><b>Categoris:</b> {dateToStr(postData.category)}</Card.Text>
              <Card.Text className="mb-3"><p dangerouslySetInnerHTML={{ __html: postData.content }} /></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" lg="4">
        <Link to={"/edit/" + postId.id}>
          <Button variant="outline-info" className="m-2">Edit</Button>
        </Link>    
          <Button variant="outline-danger" onClick={handleShowModal}>Delete</Button>       
        </Col>
      </Row>
    </div>
    )
}

export default PostAdd;