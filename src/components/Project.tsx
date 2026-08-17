import React from "react";
import chmsl from '../assets/images/projects/chmsl.png';
import accelerometer from '../assets/images/projects/accelerometer.png';
import accumulator from '../assets/images/projects/accumulator.png';
import blood_pressure from '../assets/images/projects/blood_pressure.png';
import confocal from '../assets/images/projects/confocal.png';
import raman_spectrometer from '../assets/images/projects/raman_spectrometer.png';
import die_inspection from '../assets/images/projects/die_inspection.png';
import rib_seg from '../assets/images/projects/rib_seg.png';
import nanopositioner from '../assets/images/projects/nanopositioner.png';
import cross_member from '../assets/images/projects/cross_member.png';
import machine_design from '../assets/images/projects/machine_design.mp4';
import tensile_bar from '../assets/images/projects/tensile_bar.mp4';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>

        <div className="projects-grid">
            <div className="project">
                {/* <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={chmsl} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <img src={chmsl} className="zoom" alt="thumbnail" width="100%"/>
                {/* <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>CHMSL Fastener Redesign</h2></a> */}
                <h2>CHMSL Fastener Redesign</h2>
                {/* <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p> */}
            </div>
            <div className="project">
                <img src={nanopositioner} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Nanopositioner</h2>
                {/* <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p> */}
            </div>
            <div className="project">
                <video src={machine_design} autoPlay muted loop playsInline controls width="100%"/>
                <h2>Machine Design</h2>
                {/* <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p> */}
            </div>
            <div className="project">
                <video src={tensile_bar} autoPlay muted loop playsInline controls width="100%"/>
                <h2>Tensile Bar Insertion Automation</h2>
                {/* <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p> */}
            </div>
            <div className="project">
                <img src={confocal} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Confocal Microscope</h2>
                {/* <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p> */}
            </div>
            <div className="project">
                <img src={raman_spectrometer} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Raman Spectrometer</h2>
                {/* <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p> */}
            </div>
            <div className="project">
                <img src={die_inspection} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Die Inspection Tool</h2>
                {/* <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p> */}
            </div>
            <div className="project">
                <img src={accumulator} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Accumulator</h2>
                {/* <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p> */}
            </div>
            <div className="project">
                <img src={cross_member} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Cross Member</h2>
                {/* <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p> */}
            </div>
            <div className="project">
                <img src={accelerometer} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Autonomous Mobile Equipment Validation</h2>
                {/* <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p> */}
            </div>
            <div className="project">
                <img src={blood_pressure} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Non-invasive Continuous Blood Pressure Monitoring</h2>
                {/* <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p> */}
            </div>
            <div className="project">
                <img src={rib_seg} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Machine-Learning Driven Rib Cage Segmentation</h2>
                {/* <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p> */}
            </div>
        </div>
    </div>
    );
}

export default Project;