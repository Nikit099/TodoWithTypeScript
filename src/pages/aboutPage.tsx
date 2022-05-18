import React from 'react';
import {useHistory} from 'react-router-dom'
const AboutPage = () => {
    const history = useHistory()
    return (
        <div >
            <h2>Я сижу на стуле, хочу купить хороший стул</h2>
            <button className='btn' onClick={() => history.push('/')}>Обратно к списку дел</button>
        </div>
    );
};

export default AboutPage;