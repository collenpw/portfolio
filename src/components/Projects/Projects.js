import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';

import pokeGamePic from '../Projects/pokegame.png';
import riotPic from '../Projects/riot-tracker.png';
import pokedexPic from '../Projects/pokedex.png';
import gitNomsPic from '../Projects/gitNoms.png';


const Projects = () => {
    return (
        <div className='card-holder'>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pokeGamePic} />
            <Card.Body className='project-body'>
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
            <Card.Img variant="top" src={gitNomsPic} />
            <Card.Body className='project-body'>
                <Card.Title className='card-title'>gitNoms</Card.Title>
                <Card.Text className='card-text'>
                    An app that allows users to search, add, edit, and delete recipes.
                </Card.Text>
                <div className="button-holder">
                    <a target='_blank'href="https://gitnoms.netlify.app/"><Button variant="secondary">Deployed site</Button></a>
                    <a target='_blank'href="https://github.com/TheCodingChefs/gitNomsClient"><Button variant="secondary">Github</Button></a>
                </div>

                </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img  className='project-body' variant="top" src={pokedexPic} />
            <Card.Body className='project-body'>
                <Card.Title className='card-title'>Pokedex</Card.Title>
                <Card.Text className='card-text'>
                    A Pokedex with user auth to get detailed information about Pokemon in the Pokemon game series. Made with ReactJS and Bootstrap.
                </Card.Text>
                <div className="button-holder">
                    <a target='_blank'href="https://okie-dokie-dex.netlify.app/"><Button variant="secondary">Deployed site</Button></a>
                    <a target='_blank'href="https://github.com/collenpw/pokedex-client"><Button variant="secondary">Github</Button></a>
                </div>

                </Card.Body>
        </Card>

        </div>
        
    );
};

export default Projects;