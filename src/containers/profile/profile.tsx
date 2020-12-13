import React, { Fragment } from 'react'
import {CardDeck, Card, Jumbotron} from 'react-bootstrap';


import classes from './profile.module.css';

const Profile = () => {

    return (
        <Fragment>
             <Jumbotron fluid className="pageTron">
                <h1>Profiles</h1>
                <p>
                    <strong>We are still under construction so please be patient.</strong>
                </p>
            </Jumbotron>     
                <CardDeck className={classes.Profiles}>
                    <Card className={classes.ProfileCard}>
                        <Card.Img variant="top" src="https://sun9-69.userapi.com/impf/c850324/v850324273/524a7/FlbcSNhlMi4.jpg?size=1620x2160&quality=96&proxy=1&sign=cc6dcf61482474679049882572a5337b" />
                        <Card.Body>
                        <Card.Title>Mo Cox</Card.Title>
                        <Card.Text>
                            This is Mo.{' WOOOOOW '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Mo Cox</small>
                        </Card.Footer>
                    </Card>
                    <Card className={classes.ProfileCard}>
                        <Card.Img variant="top" src="http://vladpython.pythonanywhere.com/static/assets/images/me.jpg" />
                        <Card.Body>
                        <Card.Title>Vlad Cheliadin</Card.Title>
                        <Card.Text>
                            This is Vlad.{' WOOOOOW '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Vlad Cheliadin</small>
                        </Card.Footer>
                    </Card>
                </CardDeck> 
        </Fragment>
    );
}

export default Profile;