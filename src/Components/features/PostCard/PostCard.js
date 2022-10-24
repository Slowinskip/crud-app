import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const PostCard = ({title, author, publishedDate, shortDescription, id}) => {

    return (
    <Card>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="mb-1"><b>Author:</b> {author}</Card.Text>
        <Card.Text className="mb-1"><b>Published:</b> {publishedDate}</Card.Text>
        <Card.Text>{shortDescription}</Card.Text>
        <Link to={"/post/" + id}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>   
    )
}

export default PostCard;