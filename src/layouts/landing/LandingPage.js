import React from 'react'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './LandingPage.css'
import RobbieHead from '../../../public/images/headshots/RobbieClose.JPG'

const LandingPage = () => (
    <div className="page">
        <div className="banner">
            <Jumbotron>
                <h1 className="text-center">The Gator Blockchain Club First Meeting</h1>
                <p className="text-center">September 5th, at 6pm. <br /> Stuzin Hall, Room 104 </p>
            </Jumbotron>
        </div>
        <div className="exec bg-dark">
            <Grid>
                <Row className="picrow">
                    <Col xs={6} md={3}>
                        <Image src={RobbieHead} className="headshot" circle />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={RobbieHead} className="headshot" circle />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={RobbieHead} className="headshot" circle />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={RobbieHead} className="headshot" circle />
                    </Col>
                </Row>
                <Row className="picrow">
                    <Col xs={6} md={3}>
                        <Image src={RobbieHead} className="headshot" circle />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={RobbieHead} className="headshot" circle />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={RobbieHead} className="headshot" circle />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={RobbieHead} className="headshot" circle />
                    </Col>
                </Row>
            </Grid>

            <h2 className="text-center">Executive Board</h2>
            <p className="text-center">
                Our objective at the Gator Blockchain Club is to engage students in blockchain technologies.<br/>
                By providing students with information and opportunities to hear from leading companies and <br/>
                individuals in this space, we create an environment that lets the new generation of         <br/>
                blockchain pioneers prosper.
            </p>
            <div className="text-center">
                <Button>About us</Button>
            </div>
        </div>

        <div className="contact">
            <h2 className="text-center">Contact Us</h2>
            <Grid>
                <Row className="contactIcons text-center">
                    <Col xs={6} md={2} mdOffset={3}>
                        <FontAwesomeIcon icon={faFacebook} size="6x" onClick={() => window.open('https://www.facebook.com/GatorBitcoinClub/','mywindow')} style={{cursor: "pointer"}}/>
                        <br/>Facebook
                    </Col>
                    <Col xs={6} md={2}>
                        <FontAwesomeIcon icon={faYoutube} size="6x" onClick={() => window.open('https://www.youtube.com/channel/UCFylnoedjPlU4ueG28fttGA/videos/','mywindow')} style={{cursor: "pointer"}}/>
                        <br/>Youtube
                    </Col>
                    <Col xs={6} md={2}>
                        <FontAwesomeIcon icon={faEnvelope} size="6x" onClick={() => window.open('mailto:gatorbitcoinclub@gmail.com','mywindow')} style={{cursor: "pointer"}}/>
                        <br/>Email
                    </Col>
                </Row>
            </Grid>
        </div>
    </div>
);

export default LandingPage;