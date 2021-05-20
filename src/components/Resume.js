import React from 'react'

const Resume = () => {
    return (
        <div>
            <div>
                <div className="resume">
                    <h1>Resume</h1>
                </div>
                <div className='details'>
                    <h1 className='works'>Work <br></br>Experience</h1>
                    <p className='period'>2020 -  Present</p>
                    <h1 className='info-head'>Editor</h1>
                    <div className='full-detail'>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        </p>
                    </div>
                    <p className='period'>2018 - 2020</p>
                    <h1 className='info-head' style={{ marginLeft: "54.5%" }}>Writer at Large</h1>
                    <div className='full-detail'>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        </p>
                    </div>
                    <p className='period'>2017 - 2018</p>
                    <h1 className='info-head'>Intern</h1>
                    <div className='full-detail'>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        </p>
                    </div>
                </div>
                <br /><br /><br />
                <hr />
                <div className='details' style={{ marginTop: "200px" }}>
                    <h1 className='works'>Education</h1>
                    <p className='period'>2015 - 2017</p>
                    <h1 className='info-head' style={{ marginLeft: "57%" }}>Establishment Name <br />Master’s Degree</h1>
                    <div className='full-detail'>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        </p>
                    </div>
                    <p className='period'>2012 - 2015</p>
                    <h1 className='info-head' style={{ marginLeft: "57%" }}>Establishment Name |<br />Bachelor's Degree</h1>
                    <div className='full-detail'>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        </p>
                    </div>
                </div>
                <br /><br /><br />
                <hr />
                <div className='details' style={{ marginTop: "200px" }}>
                    <h1 className='works'>Skils<br />& Expertise</h1>
                        <ul>
                            <li>I'm a paragraph. Click here to add your own text and edit me. Or else you can just leave it as it is.</li>
                            <li>I'm a paragraph. Click here to add your own text and edit me. Or else you can just leave it as it is.</li>
                            <li>I'm a paragraph. Click here to add your own text and edit me. Or else you can just leave it as it is.</li>
                            <li>I'm a paragraph. Click here to add your own text and edit me. Or else you can just leave it as it is.</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;
