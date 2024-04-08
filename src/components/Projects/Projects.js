import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import alpaca from '../../Assets/Projects/1_mb-wx9qdsOeAw89gFMIcXg.jpg'
import writer from '../../Assets/Projects/Content-writer-1068x561.jpg'
import annotation from '../../Assets/Projects/featured_ai_data_solutions.jpeg'
import faceRecog from '../../Assets/Projects/Blog-Facial-recognition-tech-in-the-workplace.png'
import dataAnalyst from '../../Assets/Projects/0_RC41_1dzkTm_zMeF.jpg'
import ml from '../../Assets/Projects/1_cG6U1qstYDijh9bPL42e-Q.jpg'
function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: 'white' }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row
                    style={{ justifyContent: 'center', paddingBottom: '10px' }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={annotation}
                            isBlog={false}
                            title="Data Annotation"
                            description="I had been an data annotator for 3 and half year, by using tools such as V7 tools, Baobabu tools, spreadsheet. I have experience in label the data using square and polygon, also verify the data label to correct the human error, and do some translations. I am really enjoy working on it."
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={faceRecog}
                            isBlog={false}
                            title="Image Recognition"
                            description="I had learn how to use openCV, PIP(pil image processing), faceNet, and some knowledge how to train data and test my own data to regconite the image. I am planning to make a further modified and implement it. "
                            ghLink="#"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={writer}
                            isBlog={false}
                            title="Content Writer"
                            description="I am doing internship as content writer and write some script for video contents, some for posting on social platform such as facebook, youtube and tiktok. Most of content are about the project review and technology. I am also a co-lead of the team too."
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={alpaca}
                            isBlog={false}
                            title="Trading bot"
                            description="The trading, I and my team build mostly on google colab, and though we are focus on testing our strategy on how to leave the bot buy and sell automatically, we tend to do on Alpaca, Binance, and coinbase by using paper money, we mostly use the buy low sell high strategy which we apply our algorithm to run. The code of our example in demo"
                            demoLink="#"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={dataAnalyst}
                            isBlog={false}
                            title="Data Analyst"
                            description="I have been doing research on Data Analyst and also complete the course of google analysis on coursera. I gain alot of knowledge about spreadsheet, SQL, and R, then there are more things such the good questions to ask, the presentation skill. "
                            demoLink="#"
                        />
                    </Col>
                    {/* <Col md={4} className="project-card">
                         <ProjectCard
                             imgPath={ml}
                             isBlog={false}
                             title="Machine Learning"
                             description="I have complete many course and practicing on building the model to test the data on kaggle and machinehack, I also seek help from geekforgeek, javatpoint and some community that suppose to face the same problem I am looking for."
                             demoLink="#"
                         />
                    /* </Col>}
                </Row>
            </Container>
        </Container>
    )
}

export default Projects
