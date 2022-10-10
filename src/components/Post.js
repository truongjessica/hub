
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment  from '../components/Comment';

const Post = ({
    name, 
    username, 
    message, 
    date,
    image,
    comments
}) => {
    
    return (
        <div>
 
            <div class="card p-1 mt-3 me-3 ms-3 mb-1 ">
                <Container >
                    <Row >
                        <Col sm={1} class="me-5">
                            <img src={image} alt="" width={50}/>
                        </Col>
                        <Col sm={3}>
                            <Row class="float-start ">
                                <div class="text-start">{ name }</div>
                                <div class="text-start">{ username }</div>
                            </Row>
                        </Col>
                        <Col sm={7}>
                            <div class="text-end">{ date }</div>
                        </Col>
                    </Row>
                    <Row sm={10}>
                        <Col>
                            <div class="float-start">{ message }</div>
                        </Col>
                    </Row>

                </Container>
                
            </div>
            {comments.map((comment) => (
                    <Comment
                        name={comment.name}
                        username={comment.username}
                        message={comment.message}
                        image={comment.image}
                    />
            ))}
        </div>
        
    );
}
     
export default Post;