
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment  from '../components/Comment';
import Heart from '../images/heart.png';
import Question from '../images/ask.png';
import Speech from '../images/speech-bubble.png';
import { useState } from 'react';

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
    const [heartCount, setHeartCount] = useState(0);
    const [questionCount, setQuestionCount] = useState(0);
    return (
        <div>
            <div className="card p-1 mt-3 me-3 ms-3 mb-1 ">
                <Container >
                    <Row >
                        <Col sm={1} className="me-3">
                            <img src={image} style={{opacity: 0.65}} alt="" width={50}/>
                        </Col>
                        <Col sm={3}>
                            <Row className="float-start ">
                                <div className="text-start" style={{color:'orange', marginLeft: '0px'}}>{ name }</div>
                                <div className="text-start" style={{opacity:0.4, marginLeft: '0px'}}>{ username }</div>
                            </Row>
                        </Col>
                        <Col sm={6}>
                            <div className="text-end">{ date }</div>
                        </Col>
                    </Row>
                    <Row sm={10}>
                        <Col>
                            <div className="float-start" style={{opacity: 0.80}}>{ message }</div>
                        </Col>
                    </Row>
                    <Row sm={10}>
                        <Col  sm={5}>
                            <Row>
                                <Col sm={1}>
                                    <img className="float-start mt-1" style={{opacity: 0.80}} src={ Heart } onClick={() => setHeartCount(heartCount + 1)} alt="" width={20}/>
                                </Col>
                                <Col sm={1}>
                                    <div className="float-start" style={{opacity: 0.80}}>{heartCount}</div>
                                </Col>
                                <Col sm={1}>
                                    <img className="float-start mt-1" style={{opacity: 0.80}} src={Question} onClick={() => setQuestionCount(questionCount + 1)} alt="" width={20}/>
                                </Col>
                                <Col sm={1}>
                                    <div className="float-start" style={{opacity: 0.80}}>{questionCount}</div>
                                </Col>
                                <Col sm={1}>
                                    <img className="float-start mt-1" style={{opacity: 0.80}} src={Speech} alt="" width={20}/>
                                </Col>
                                <Col sm={1}>
                                    <div className="float-start" style={{opacity: 0.80}}>{numComments}</div>
                                </Col>
                            </Row>
                            
                        </Col>
                        
                    </Row>
                    

                </Container>
                
            </div>
            {comments.map((comment, index) => (
                    <Comment
                        key={index}
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