import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from '../components/Post';
import GroupCard from '../components/GroupCard';
import userIcon from '../images/user.png';
import './styles.css';

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

const Forum_copy = () => {
    
    return (
        <div class='main'>
            <div class="glass">
                <div class="dashboard">
                    {groups.map((group) => (
                        <GroupCard
                            groupname={group.groupname}
                        />
                    ))}
                </div>
                <div class="games">
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
            </div>
        </div>
        
    );
}
     
export default Forum_copy;