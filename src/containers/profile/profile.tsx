import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import MoProfile from '../../components/profile/mo';
import VladProfile from '../../components/profile/vlad';


const Profile = () => {
    
    let { which } = useParams<{which: string}>();
   
    const getWhich = (w: string) => {
        
        switch(w) {
            case "mo":
                return <MoProfile />
            case "vlad":
                return <VladProfile />
        }
    }

    return (
        <Fragment>
            
            <p>Which Profile: <em>{which}</em></p>
            {getWhich(which)}       
                
        </Fragment>
    );
}

export default Profile;