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
                        <img src={image} alt="" width={50}/>
                    </Col>
                    <Col sm={3}>
                        <Row class="float-start ">
                            <div class="text-start">{ name }</div>
                            <div class="text-start">{ username }</div>
                        </Row>
                    </Col>
                    <Col>
                        <div class="float-start">{ message }</div>
                    </Col>
                </Row>


            </Container>
        
        </div>
    );
}
     
export default Comment;