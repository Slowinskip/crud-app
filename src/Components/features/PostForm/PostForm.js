import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content});
      }

    return (
        <Row>
            <Col md={{span: 6, offset: 3}}>
                <h1>{actionText}</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" />
                    </Form.Group>      
                    <Form.Group className="mb-3">
                        <Form.Label>Author:</Form.Label>
                        <Form.Control value={author} onChange={e => setAuthor(e.target.value)} type="text" placeholder="Author" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Published:</Form.Label>
                        <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control value={shortDescription} onChange={e => setShortDescription(e.target.value)} type="textarea" style={{ height: '80px' }}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Content</Form.Label>
                        <ReactQuill value={content} onChange={setContent} style={{ height: '120px' }}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mt-5'>
                        {actionText}
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default PostForm;