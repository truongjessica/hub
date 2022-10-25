
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment  from '../components/Comment';
import Heart from '../images/heart.png';
import Question from '../images/ask.png';
import Speech from '../images/speech-bubble.png';

const Post = ({
    name, 
    username, 
    message, 
    date,
    image,
    numHearts,
    numQuestions,
    numComments,
    comments
}) => {
    
    return (
        <div>
            <div class="card p-1 mt-3 me-3 ms-3 mb-1 ">
                <Container >
                    <Row >
                        <Col sm={1} class="me-5">
                            <img src={image} style={{opacity: 0.65}} alt="" width={50}/>
                        </Col>
                        <Col sm={3}>
                            <Row class="float-start ">
                                <div class="text-start" style={{color:'orange'}}>{ name }</div>
                                <div class="text-start" style={{opacity:0.4}}>{ username }</div>
                            </Row>
                        </Col>
                        <Col sm={7}>
                            <div class="text-end">{ date }</div>
                        </Col>
                    </Row>
                    <Row sm={10}>
                        <Col>
                            <div class="float-start" style={{opacity: 0.80}}>{ message }</div>
                        </Col>
                    </Row>
                    <Row sm={10}>
                        <Col  sm={5}>
                            <Row>
                                <Col sm={1}>
                                    <img class="float-start mt-1" style={{opacity: 0.80}} src={ Heart } alt="" width={20}/>
                                </Col>
                                <Col sm={1}>
                                    <div class="float-start" style={{opacity: 0.80}}>{numHearts}</div>
                                </Col>
                                <Col sm={1}>
                                    <img class="float-start mt-1" style={{opacity: 0.80}} src={Question} alt="" width={20}/>
                                </Col>
                                <Col sm={1}>
                                    <div class="float-start" style={{opacity: 0.80}}>{numQuestions}</div>
                                </Col>
                                <Col sm={1}>
                                    <img class="float-start mt-1" style={{opacity: 0.80}} src={Speech} alt="" width={20}/>
                                </Col>
                                <Col sm={1}>
                                    <div class="float-start" style={{opacity: 0.80}}>{numComments}</div>
                                </Col>
                            </Row>
                            
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