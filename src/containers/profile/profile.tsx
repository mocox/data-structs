import React, { Fragment } from 'react'
import {CardDeck, Jumbotron} from 'react-bootstrap';
import ProfileCard from '../../components/profile-card/profile-card';


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
                    <ProfileCard
                        header="Mo"
                        imgSrc="https://sun9-69.userapi.com/impf/c850324/v850324273/524a7/FlbcSNhlMi4.jpg?size=1620x2160&quality=96&proxy=1&sign=cc6dcf61482474679049882572a5337b"
                        title="Mo Cox"
                        cardText="This is Mo.' WOOOOOW '"
                        footerText="Mo Cox" />                    
                    <ProfileCard 
                        header="Vlad"
                        imgSrc="http://vladpython.pythonanywhere.com/static/assets/images/me.jpg"
                        title="Vlad Cheliadin"
                        cardText="This is Vlad.' WOOOOOW '"
                        footerText="Vlad Cheliadin" />                    
                </CardDeck> 
        </Fragment>
    );
}

export default Profile;