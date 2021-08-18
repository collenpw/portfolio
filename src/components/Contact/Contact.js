import { ListGroup } from "react-bootstrap";

const Contact = () => {
    return (
        <div className='contact-div'>
            <div className="contact-div">
                <p className='about-p'>Feel free to contact me anytime through the following methods! I would love to chat and will get back to you as soon as possible!</p>
            </div>
            <ListGroup className="contact">
                <ListGroup.Item className="contact-info">Collen Whitney</ListGroup.Item>
                <ListGroup.Item className="contact-info">collenpw13@gmail.com</ListGroup.Item>
                <ListGroup.Item className="contact-info"><a target="_blank" rel="noreferrer" href="https://github.com/collenpw">Github</a></ListGroup.Item>
                <ListGroup.Item className="contact-info"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/collenpw">LinkedIn</a></ListGroup.Item>
                <ListGroup.Item className="contact-info">Phone: 434-857-8883</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Contact;