import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setpublishedDate] = useState('');
    const [shortDescription, setshortDescription] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({title, author, publishedDate, shortDescription, content}));
        navigate('/');
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" />
            </Form.Group>      
            <Form.Group className="mb-3">
                <Form.Label>Author:</Form.Label>
                <Form.Control onChange={e => setAuthor(e.target.value)} type="text" placeholder="Author" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Published:</Form.Label>
                <Form.Control onChange={e => setpublishedDate(e.target.value)} type="date" placeholder="DD-MM-RRRR" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Short Description</Form.Label>
                <Form.Control onChange={e => setshortDescription(e.target.value)} type="textarea" style={{ height: '80px' }}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control onChange={e => setContent(e.target.value)} type="textarea" style={{ height: '120px' }}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default AddPostForm;