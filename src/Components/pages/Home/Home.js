import PostCard from '../../features/PostCard/PostCard';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';


const Home = () => {

    const posts = useSelector(getAllPosts);

    return (
        <>
            <Row>
                <Col>
                    <h1>All posts</h1>
                </Col>
                <Col className="d-flex flex-row-reverse p-2"> 
                    <Link to="/post/add">
                        <Button variant="outline-info">Add post</Button>{' '} 
                    </Link>
                </Col>
            </Row>
            <Row xs={1} md={3} className="g-3 justify-content-md-center">
            {posts.map(post => (
            <Col key={post.id}>
                <PostCard {...post}/>
            </Col>
            ))}
            </Row>
        </>
    )
}

export default Home;