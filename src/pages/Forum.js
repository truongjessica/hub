import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from '../components/Post';
import GroupCard from '../components/GroupCard';
import userIcon from '../images/user.png';
import './styles.css';

var groups = [
    { groupname:"All Groups", selected:true },
    { groupname:"CS 2222", selected:false },
    { groupname:"Senior Project", selected:false},
    { groupname:"SE 4444.01", selected:false},
    { groupname:"group 6", selected:false},
    { groupname:"group 7", selected:false},
    { groupname:"group 8", selected:false}
]

var posts = [
    { name:"Jeffrey Byland", username:"@jland", message:"What day is the exam for section 501?", date:"05-01-22", image:userIcon, numHearts:5, numQuestions:3, numComments:2, comments:[{ name:"Nguyen Tran", username:"@nguyen", message:"October 25th in the Testing Center.", image:userIcon }, { name:"Jon Doe", username:"@jondoe", message:"Theres a test?", image:userIcon }] },
    { name:"Jessica Truong", username:"@j3s", message:"How is the UI implmentation coming?", date:"10-25-22", image:userIcon, numHearts:1, numQuestions:3, numComments:1, comments:[{ name:"Lea Vuong", username:"@lleaa", message:"Its going well!", image:userIcon }] },
    { name:"Luxin Wang", username:"@lucy", message:"Message3", date:"01-01-01", image:userIcon, numHearts:1, numQuestions:0, numComments:0, comments:[] },
    { name:"Display Name 3", username:"@username3", message:"Message3", date:"01-01-01", image:userIcon, numHearts:5, numQuestions:3, numComments:2, comments:[] },
    { name:"Display Name 3", username:"@username3", message:"Message3", date:"01-01-01", image:userIcon, numHearts:5, numQuestions:3, numComments:2, comments:[] }
]

const Forum = () => {
    
    return (
        <div>
            <div class="d-flex justify-content-center">
                <Container>
                    <Row>
                        <Col sm={5} >
                            <div class="group p-4" style={{maxHeight:"45rem", overflow:"auto"}}>
                                {groups.map((group) => (
                                    <GroupCard
                                        groupname={group.groupname}
                                        selected={group.selected}
                                    />
                                ))}
                            </div>
                            <Row >
                                <Col>
                                    <div class="shadow-sm card p-2 mt-4 ms-5">
                                        Create
                                    </div>
                                </Col>
                                <Col>
                                    <div class="shadow-sm card p-2 mt-4 me-5" style={{background: 'orange', color: 'white'}}>
                                        Join
                                    </div>
                                </Col>
                            </Row>
                            
                        </Col>
                        <Col sm={7}>
                            <div class="pt-1 posts" style={{maxHeight:"50rem", overflow:"auto", boxShadow: "12px 0 10px -8px #d5d5d5, -12px 0 10px -8px #d5d5d5"}}>
                                {posts.map((post) => (
                                <Post
                                    name={post.name}
                                    username={post.username}
                                    message={post.message}
                                    date={post.date}
                                    image={post.image}
                                    numHearts={post.numHearts}
                                    numQuestions={post.numQuestions}
                                    numComments={post.numComments}
                                    comments={post.comments}
                                />
                            ))}
                            </div>
                            
                        </Col>
                    </Row> 
                </Container>
            </div>
        </div>
    );
}
     
export default Forum;