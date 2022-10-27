import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';

const PostForm = ({ action, actionText, ...props }) => {

    
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setcontentError] = useState(false);
    const [dateError, setdateError] = useState(false);
    const [category, setCategory] = useState(props.category || '');
    const [categoryError, setcategoryError] = useState(false);


    const categories = useSelector(getAllCategories);

    const handleSubmit = () => {
        if(category != 'null'){
            setcategoryError(!categoryError)
        }
        setcontentError(!content)
        setdateError(!publishedDate)
        if(content && publishedDate && category) {
            action({ title, author, publishedDate, shortDescription, content, category});
        }
      }

      const { register, handleSubmit: validate, formState: { errors } } = useForm();

    return (
        <Row>
            <Col md={{span: 6, offset: 3}}>
                <h1>{actionText}</h1>
                <Form onSubmit={validate(handleSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            {...register("title", { required: true,})}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            type="text" placeholder="Enter title"
                        />
                        {errors.title && <small className="d-block form-text text-danger mt-2">Content can't be empty min. 4 worlds</small>}                    
                    </Form.Group>      
                    <Form.Group className="mb-3">
                        <Form.Label>Author:</Form.Label>
                        <Form.Control 
                        {...register("author", { required: true, minLength: 4 })}
                        value={author} onChange={e => setAuthor(e.target.value)} type="text" placeholder="Author" />
                        {errors.author && <small className="d-block form-text text-danger mt-2">Content can't be empty min. 4 worlds</small>}                    
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Published:</Form.Label>
                        <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
                        {dateError && <small className="d-block form-text text-danger mt-2">You have to choose a date.</small>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select 
                        {...register("category", { required: true })}
                        onChange={e => setCategory(e.target.value)}
                        value={category ? category : "null"}>
                        <option disabled value="null">Select category...</option>
                        {categories.map((category, index) => <option key={index} value={category}>{category}</option> )}
                        </Form.Select>            
                        {categoryError && <small className="d-block form-text text-danger mt-2">Please choose category</small>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control
                        {...register("shortDescription", { required: true, minLength: 20 })} 
                        value={shortDescription} onChange={e => setShortDescription(e.target.value)} type="textarea" style={{ height: '80px' }}/>
                        {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Content can't be empty min. 20 worlds</small>}                    
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Content</Form.Label>
                        <ReactQuill value={content} onChange={setContent} style={{ height: '120px' }}/>
                        {contentError && <small className="d-block form-text text-danger mt-5">Content can't be empty</small>}
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