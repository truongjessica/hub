import styled from "styled-components";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PostBox = ({

}) => {


    return (
        <Wrapper>
            <form>
                <div class="ps-4 pe-4">
                    <div className="post-field">
                        <textarea 
                            required 
                            placeholder="Write forum post here..." 
                            className="form-control" 
                        />
                    </div>
                </div>
                <Row>
                    <Col class="float-end ">
                        <div className="cancel-button">
                            <button>
                                Cancel
                            </button>
                        </div>
                    </Col>
                    <Col class="float-end ">
                        <div className="post-button">
                            <button>
                                Post
                            </button>
                        </div>
                    </Col>
                    
                    
                </Row>
                
            </form>
        </Wrapper>
    );
}
     
const Wrapper = styled.section`
  margin-top: 1.5rem;
  max-width: 750px;
  margin: 1.5rem auto;
`;

const Button = styled.button`
  background:#F2831A ;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #F2831A;
  border-radius: 10px;
`;

export default PostBox;