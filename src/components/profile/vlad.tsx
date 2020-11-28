import React, { Fragment } from 'react';
import Image from '../images/Image';

import classImg from './profileImages.module.css';

const VladProfile = () => {

    return (
        <Fragment>
            <Image className={classImg.Vlad} src='http://vladpython.pythonanywhere.com/static/assets/images/me.jpg' />
            <h1>Vlad's Profile</h1>
            <p style={{fontSize: 20}}>My name is Vlad, I am 22 years old and a student from St.Petersburg in Russia.</p>
            <p style={{fontSize: 20}}>In my free time I like to listen to music, hang out with my friends, swimming and many other activities. I can also play the guitar a little.</p>
            <h3>.....</h3>
        </Fragment>
    );
}

export default VladProfile;