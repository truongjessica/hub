import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from '../components/Post';
import GroupCard from '../components/GroupCard';
import userIcon from '../images/user.png';

var groups = [
    { groupname:"group 1"},
    { groupname:"group 2"},
    { groupname:"group 3"},
    { groupname:"group 4"},
    { groupname:"group 4"},
    { groupname:"group 4"}
]

var posts = [
    { name:"Display Name 1", username:"@username1", message:"Message1", date:"01-01-01", image:userIcon, comments:[{ name:"Display Name 1", username:"@username1", message:"Message1", image:userIcon }, { name:"Display Name 1", username:"@username1", message:"Message1", image:userIcon }] },
    { name:"Display Name 2", username:"@username2", message:"Message2", date:"01-01-01", image:userIcon, comments:[{ name:"Display Name 1", username:"@username1", message:"Message1", image:userIcon }] },
    { name:"Display Name 3", username:"@username3", message:"Message3", date:"01-01-01", image:userIcon, comments:[] },
    { name:"Display Name 3", username:"@username3", message:"Message3", date:"01-01-01", image:userIcon, comments:[] },
    { name:"Display Name 3", username:"@username3", message:"Message3", date:"01-01-01", image:userIcon, comments:[] }
]

const Forum = () => {
    
    return (
        <div class="d-flex justify-content-center">
            <Container>
                <Row>
                    <Col sm={5} >
                        <div class="m-4 h-75 overflow-auto">
                            {groups.map((group) => (
                                <GroupCard
                                    groupname={group.groupname}
                                />
                            ))}
                        </div>
                    </Col>
                    <Col sm={7} >
                        <div class="h-75 overflow-auto">
                            {posts.map((post) => (
                            <Post
                                name={post.name}
                                username={post.username}
                                message={post.message}
                                date={post.date}
                                image={post.image}
                                comments={post.comments}
                            />
                        ))}
                        </div>
                        
                    </Col>
                </Row> 
            </Container>
        </div>
    );
}
     
export default Forum;