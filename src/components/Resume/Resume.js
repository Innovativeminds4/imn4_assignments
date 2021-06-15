import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div>
            <div className="resume">
                <h1>Resume</h1>
            </div>
            <div className='details'>
                <h1 className='more-details'>Work <br></br>Experience</h1>
                <p className='date'>2020 -  Present</p>
                <h1 className='info-head'>Editor</h1>
                <div className='exp-details'>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
                </div>
                <div className='detail'>
                    <p className='date2'>2018 -  2020</p>
                    <h1 className='info-head2'>Writer at Large</h1>
                </div>
                <div className='exp-details'>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
                </div>
                <div className='detail'>
                    <p className='date2'>2017 -  2018</p>
                    <h1 className='info-head2'>Intern</h1>
                </div>
                <div className='exp-details'>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
                </div>
            </div>
            <br/><br/><br/>
            <hr/>
            <div className='details'>
                <h1 className='more-details2'>Education</h1>
                <p className='date'>2015 -  2017</p>
                <h1 className='info-head'>Establishment Name<br></br>Master’s Degree</h1>
                <div className='exp-details'>
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
                </p>
                </div>
                <div className='detail'>
                    <p className='date2'>2012 -  2015</p>
                    <h1 className='info-head2'>Establishment Name |<br /> Bachelor's Degree</h1>
                </div>
                <div className='exp-details'>
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
                </p>
                </div>
            </div>
            <br/><br/><br/>
            <hr/>
            <div className='details'>
                <h1 className='more-details2'>Skils <br/> & Expertise</h1>
                <div className='exp-details'>
                    <ul className='skills-list'>
                        <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                        <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                        <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                        <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Resume;