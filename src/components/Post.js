import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Post = ({
    name, 
    username, 
    message, 
    date,
    image
}) => {
    
    return (
        <div class="card p-1 m-3">
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
            {/* <h1>{ username }</h1> */}
        </div>
    );
}
     
export default Post;