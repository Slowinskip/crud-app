import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

const Categories = () => {

    const allCategory = useSelector(getAllCategories);

    return (
        <Row>
            <Col md={{span: 6, offset: 3}}>
            <h1 className="mb-5">All categories</h1>
            
                {allCategory.map( category => 
                    <Card>
                        <Link to={"/category/" + category} key={category} className="m-3">{category}</Link>
                    </Card>
                )}
            </Col>
        </Row>

)
}

export default Categories;