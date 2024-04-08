import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { SiKaggle } from 'react-icons/si'
function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: '2.6em' }}>
                            GET TO <span className="purple"> KNOW</span> ME
                        </h1>
                        <p className="home-about-body">
                        I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️ <br/><br/> 
                        I am focusing on <i><b className="purple">Web Development</b></i>.
                            <br />
                            <br />I am good at
                            <i>
                                <b className="purple">
                                    {' '}
                                    Javascript, Nodejs,
                                    Reactjs, C , Java{' '}
                                </b>
                            </i>
                            <br />
                            <br />
                            My field of interest's are 
                            &nbsp;
                            <i>
                                <b className="purple">Building </b> Different websites with different themes for different goals{' '}
                                
                            </i>
                            <br />
                            <br />I am looking for developing myself and improve
                            my skills <br />
                            <br /> I am an Contributor 
                            <i>
                                <b className="purple"> Open Source </b>Contributor 
                            </i>
                        </p>
                    </Col>
                    {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{' '}
                            <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/achrafkeddour"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/achraf-keddour-701616242/?originalSubdomain=dz"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.facebook.com/achraf.keddour"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <FaFacebook />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default Home2
