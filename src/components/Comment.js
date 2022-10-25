import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Comment = ({
    name,
    username,
    message,
    image
}) => {
    
    return (
        <div class="card p-1 ms-5 me-3 mb-1">
            <Container >
                <Row >
                    <Col sm={1}>
                        <img src={image} style={{opacity: 0.65}} alt="" width={50}/>
                    </Col>
                    <Col sm={2}>
                        <Row class="float-start ">
                            <div class="text-start" style={{color:'orange'}}>{ name }</div>
                            <div class="text-start" style={{opacity:0.4}}>{ username }</div>
                        </Row>
                    </Col>
                    <Col>
                        <div class="float-start" style={{opacity: 0.80}}>{ message }</div>
                    </Col>
                </Row>


            </Container>
        
        </div>
    );
}
     
export default Comment;