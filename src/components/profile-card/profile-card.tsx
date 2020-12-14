import React from 'react';
import { Card } from 'react-bootstrap';

import classes from './profilecard.module.css';

export interface IProfileCard {
    imgSrc: string;
    title: string;
    cardText:string;
    footerText: string;
}

const ProfileCard = (props: IProfileCard) => {

    return (
        <Card className={classes.ProfileCard}>
            <Card.Img className={classes.ImgStyle} variant="top" src={props.imgSrc} />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.cardText}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.footerText}</small>
            </Card.Footer>
        </Card>
    );
} 

export default ProfileCard;