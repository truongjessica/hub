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
        <div className="card p-1 ms-5 me-3 mb-1">
            <Container >
                <Row >
                    <Col sm={1}>
                        <img src={image} style={{opacity: 0.65}} alt="" width={50}/>
                    </Col>
                    <Col sm={3}>
                        <Row className="float-start ">
                            <div className="text-start" style={{color:'orange', marginLeft: '25px'}}>{ name }</div>
                            <div className="text-start" style={{opacity:0.4, marginLeft: '25px'}}>{ username }</div>
                        </Row>
                    </Col>
                    <Col>
                        <div className="float-start" style={{opacity: 0.80}}>{ message }</div>
                    </Col>
                </Row>


            </Container>
        
        </div>
    );
}
     
export default Comment;