import React from 'react';
import Icon from './GitHub_Logo.png'

function Footer() {
    return (
        <div>
            <a href="https://github.com/pmgirardi">

                <img src={Icon} alt="github" style={{ height: 50, width: 50 }}>

                </img>

            </a>

            <p>©️ PMG</p>
        </div>
    )
}

export default Footer;