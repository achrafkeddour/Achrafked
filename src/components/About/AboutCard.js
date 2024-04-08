import React from 'react'
import Card from 'react-bootstrap/Card'
import { BiSolidRightArrow } from 'react-icons/bi'

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: 'justify' }}>
                        Hello everyone, I'm{' '}
                        <span className="purple">Achraf Keddour </span>
                        from{' '}
                        <span className="purple">
                            {' '}
                            Jijel : Algeria
                        </span>
                        <br /> I am a student of{' '}
                        <span className="purple">
                        National Polytechnic School of Oran
                        </span>
                        <br /> I learned
                        <span className="purple"> Networks Engineering</span>
                        <br />
                        I am currently a web developer & networks engineer
                        <br />
                        <br />
                        <br />
                        Apart from coding and doing research, I am also interest
                        in doing such as:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <BiSolidRightArrow /> Writing Tech Blogs
                        </li>
                        <li className="about-activity">
                            <BiSolidRightArrow /> Travelling
                        </li>
                        <li className="about-activity">
                            <BiSolidRightArrow /> Doing researches 
                        </li>
                    </ul>

                    <p style={{ color: 'rgb(155 126 172)' }}>
                        "Little deeds pave the path for great change."{' '}
                    </p>
                    <footer className="blockquote-footer">Achraf</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard
