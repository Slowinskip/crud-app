import { useParams} from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { editPost } from "../../../redux/postsRedux";
import { Navigate } from "react-router-dom";
const EditPostForm = () => {

    const postId = useParams();
    const id = postId.id;
    const postData = useSelector(state => getPostById(state, postId.id))
    const navigate = useNavigate();


    const dispatch = useDispatch();

    const handleSubmit = post => {
        dispatch(editPost({ ...post, id }));
        navigate('/')
    }
    if(!postData) return <Navigate to="/" />
    else return (
        <PostForm 
        action={handleSubmit}
        title={postData.title}
        author={postData.author}
        publishedDate={postData.publishedDate}
        shortDescription={postData.shortDescription}
        content={postData.content}
        actionText={'Edit post'}
        />
    )
}

export default EditPostForm;