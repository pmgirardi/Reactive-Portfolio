import React from 'react';
import Icon from './GitHub_Logo.png';
import Icon2 from './In-Blue-128.png'

function Footer() {
    return (
        <div>
            <a href="https://github.com/pmgirardi">

                <img src={Icon} alt="github" style={{ height: 50, width: 50 }}>

                </img>

            </a>

            <a href="https://www.linkedin.com/in/paige-girardi-441243192/">

              <img src={Icon2} alt="linkedin" style={{ height: 50, width: 50 }}>

              </img>

          </a>


            <p>©️ PMG</p>
        </div>
    )
}

export default Footer;