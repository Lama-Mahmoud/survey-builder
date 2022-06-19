import './Response.css';
import React from 'react';
import './shortans.css';
import Shortans from './Shortans';
import Mcq from './Multiplechoice';

const Response = (props) => {
    
    return ( 
        <div className='survey' align="center">
            <div className='question'>
                <h2>Title</h2>
            </div>
            <Shortans/>
            <hr/>
            <Mcq />
            <hr/>
            <button className='Button'><b>Submit</b></button>

        </div>
     );
}
 
export default Response;