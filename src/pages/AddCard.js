import styled from "styled-components";
import { useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddCard = () => {
    const location = useLocation()
    const { groupName } = location.state    // use for axios post

    return (
        <Wrapper>
            <form>
                <h3 className="text-center">Add Flash Card to {groupName}</h3>
                <div className="ps-4 pe-4 pb-4">
                    <div className="post-field">
                        <label>Question</label>
                        <input 
                            name="Question"
                            required 
                            placeholder="Write question here..." 
                            className="form-control" 
                        />
                    </div>
                </div>
                <div className="ps-4 pe-4">
                    <div className="post-field">
                        <label>Answer</label>
                        <textarea 
                            required 
                            placeholder="Write answer here..." 
                            className="form-control" 
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="cancel-button">
                        <button>
                            Cancel
                        </button>
                    </div>
                    <div className="post-button">
                        <button>
                            Post
                        </button>
                    </div>
                </div>
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

export default AddCard;