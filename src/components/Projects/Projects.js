import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';

import pokeGamePic from '../Projects/pokegame.png';
import riotPic from '../Projects/riot-tracker.png';


const Projects = () => {
    return (
        <div className='card-holder'>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pokeGamePic} />
            <Card.Body>
                <Card.Title className='card-title'>Pokemon Battle Game (Vanilla JS)</Card.Title>
                <Card.Text className='card-text'>
                    A turn based battle between my original team on Pokemon Platinum
                    and the game's final boss, Cynthia.
                </Card.Text>
                <div className="button-holder">
                    <a target='_blank'href="https://collenpw.github.io/poke-game/"><Button variant="secondary">Deployed site</Button></a>
                    <a target='_blank'href="https://github.com/collenpw/poke-game/"><Button variant="secondary">Github</Button></a>
                </div>

                </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={riotPic} />
            <Card.Body>
                <Card.Title className='card-title'>Teamfight Tactics Match History Search Tool</Card.Title>
                <Card.Text className='card-text'>
                    An app to search for a players most recent 5 games of Teamfight Tactics
                </Card.Text>
                <div className="button-holder">
                    <a target='_blank'href="https://festive-panini-4040b8.netlify.app/"><Button variant="secondary">Deployed site</Button></a>
                    <a target='_blank'href="https://github.com/collenpw/riot-tracker"><Button variant="secondary">Github</Button></a>
                </div>

                </Card.Body>
        </Card>

        </div>
        
    );
};

export default Projects;