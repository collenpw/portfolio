import me from '../AboutMe/port_pic.jpg'

const AboutMe = () => {
    return (
        <div>
            <img className='me-pic' src={ me } alt="Collen Whitney standing at the beach" />
            <div className="about">
                <p>Hi my name is Collen Whitney and I am a software engineer from Harrisonburg, VA. I have always loved computers so writing code seemed like the natural route for me to take and I have enjoyed every moment so far. When I am not working on projects I love to hike, go to the beach, and play with my dog.</p>
            </div>
        </div>
    );
};

export default AboutMe;