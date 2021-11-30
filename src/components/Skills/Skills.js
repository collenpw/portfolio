import { ListGroup } from "react-bootstrap";

const Skills = () => {
    return (
        <div>
           <ListGroup className='skills'>
               <ListGroup.Item className="skill">HTML</ListGroup.Item>
               <ListGroup.Item className="skill">CSS</ListGroup.Item>
               <ListGroup.Item className="skill">JavaScript</ListGroup.Item>
               <ListGroup.Item className="skill">PL/SQL</ListGroup.Item>
               <ListGroup.Item className="skill">React</ListGroup.Item>
               <ListGroup.Item className="skill">Bootstrap</ListGroup.Item>
               <ListGroup.Item className="skill">Express</ListGroup.Item>
               <ListGroup.Item className="skill">Mongo</ListGroup.Item>
               <ListGroup.Item className="skill">Mongoose</ListGroup.Item>
               <ListGroup.Item className="skill">CRUD Functionality</ListGroup.Item>
               <ListGroup.Item className="skill">RESTful programming</ListGroup.Item>
           </ListGroup>
        </div>
    );
};

export default Skills;