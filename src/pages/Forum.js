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
    { groupname:"group 4"}
]

var posts = [
    { name:"Display Name 1", username:"@username1", message:"Message1", date:"01-01-01", image:userIcon },
    { name:"Display Name 2", username:"@username2", message:"Message2", date:"01-01-01", image:userIcon },
    { name:"Display Name 3", username:"@username3", message:"Message3", date:"01-01-01", image:userIcon }
]

const Forum = () => {
    
    return (
        <div className="Forum">
            <Container>
                <Row>
                    <Col sm={4}>
                        {groups.map((group) => (
                            <GroupCard
                                groupname={group.groupname}
                            />
                        ))}
                    </Col>
                    <Col sm={8}>
                        {posts.map((post) => (
                            <Post
                                name={post.name}
                                username={post.username}
                                message={post.message}
                                date={post.date}
                                image={post.image}
                            />
                        ))}
                    </Col>
                </Row> 
            </Container>
        </div>
    );
}
     
export default Forum;