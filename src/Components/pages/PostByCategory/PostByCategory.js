import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostByCategory } from "../../../redux/postsRedux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import PostCard from "../../features/PostCard/PostCard";

const PostByCategory = () => {

    const {postCategory} = useParams();
    const postData =  useSelector(state => getPostByCategory(state, postCategory));

    if(postData.length === 0)
        return (
          <>
            <h1>Category: {postCategory}</h1>
            <p>Category {postCategory} is empty</p>
          </>
        )
    return (
        <div>
            <Row className="justify-content-end">
                <Col>
                <h1>Category: {postCategory}</h1>
                </Col>
                <Col className="d-flex flex-row-reverse p-2"> 
                <Link to="/post/add">
                    <Button variant="outline-info">Add post</Button>{' '} 
                </Link>
                </Col>
            </Row>
            <Row xs={1} md={3} className="g-3 justify-content-md-center">
            {postData.map(post => (
                <Col key={post.id}>
                <PostCard {...post}/>
                </Col>
            ))}
            </Row>
        </div>
    );
}

export default PostByCategory;