import me from '../AboutMe/port_pic.jpg'

const AboutMe = () => {
    return (
        <div>
            <img className='me-pic' src={ me } alt="Collen Whitney standing at the beach" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum repellendus, esse dolorum, 
                sint vel officia tenetur quam soluta mollitia explicabo suscipit beatae, minima omnis 
                corrupti quidem sunt. Magni, recusandae rem.</p>
        </div>
    );
};

export default AboutMe;