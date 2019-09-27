import React from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import Iframe from 'react-iframe'
import Countdown from '../../components/Countdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './LandingPage.css'

import RobbieHead from '../../../public/images/headshots/Robbie.jpg'
import AntonioHead from '../../../public/images/headshots/Antonio.jpg'
import JacobHead from '../../../public/images/headshots/Jacob.jpg'
import KyleHead from '../../../public/images/headshots/Kyle.jpg'
import FelipeHead from '../../../public/images/headshots/Felipe.jpg'
import AndrewHead from '../../../public/images/headshots/Andrew.jpg'
import MitchellHead from '../../../public/images/headshots/Mitchell.jpg'
import MariaHead from '../../../public/images/headshots/Maria.jpg'
import HunterHead from '../../../public/images/headshots/Hunter.jpg'
import MaddieHead from '../../../public/images/headshots/Maddie.jpg'

import benPartner from '../../../public/images/partners/ben.jpg'
import bitcoinPartner from '../../../public/images/partners/bitcoin_com.jpg'
import bloqPartner from '../../../public/images/partners/bloq.jpg'
import chamberPartner from '../../../public/images/partners/chamber.jpg'
import consensysPartner from '../../../public/images/partners/consensys.jpg'


const LandingPage = () => (
    <div className="page">
        <div className="banner">
            <Jumbotron>
                <h1 className="text-center">Meetings Stuzin 102</h1>
                <div className="text-center">Tuesdays</div>
                <div className="text-center">6pm - 8pm</div>
                <Countdown date={`2019-10-01T18:00:00`} />
            </Jumbotron>
        </div>
        <div className="maps">
            <Grid >
                <Row >
                    <Col md={6} style={{height: "50vh", marginTop: "20px"}}>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.3783948793225!2d-82.34339338421185!3d29.650792182027256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8a3837298720d%3A0x12f45a830cb6382d!2sStuzin+Hall!5e0!3m2!1sen!2sus!4v1507538142089"
                                className="responsive-iframe-container"
                                height="100%"
                                width="95%"
                        />
                    </Col>
                    <Col md={6} style={{height: "50vh", marginTop: "20px"}}>
                        <Iframe url="https://calendar.google.com/calendar/embed?src=hiv95t71ircf8k5m6mtukqcrkc%40group.calendar.google.com&ctz=America%2FNew_York"
                                className="small-container"
                                height="100%"
                                width="95%"
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
        <div className="mission bg-dark">
            <Grid>
                <Row className="inforow" style={{paddingTop: "30px"}}>
                    <Col className="clubInfo" md={6} xs={12}>
                        <h2 className="text-center">The Club</h2>
                        <p>
                            The Gator Blockchain Club is an official student group registered at the University of Florida.
                            We believe blockchain is a powerful technology that has the potential to revolutionize the global economy.
                            We seek to inspire and prepare the next generation of blockchain pioneers.
                        </p>
                    </Col>
                    <Col className="clubMission" md={6} xs={12}>
                        <h2 className="text-center">Our Mission</h2>
                        <p>
                            <span>The Gator Blockchain Club seeks to inform and promote academic interest on the topic
                            of blockchain and related technologies.</span>
                            <div style={{paddingTop: "10px"}}>We realize our mission through our goals:</div>
                            <div style={{paddingTop: "10px"}}>(1) Establish a community of like minds interested in blockchain technology. </div>
                            <div>(2) Help others to understand the technology.</div>
                            <div>(3) Help students get jobs in the field.</div>
                        </p>
                    </Col>
                </Row>
            </Grid>
        </div>
        <div className="exec bg-dark">
            <h2 className="text-center" style={{paddingTop: "30px", marginBottom: "0px"}}>Executive Board</h2>
            <Grid>
                <Row className="picrow">
                    <Col xs={4} md={2} mdOffset={2}>
                        <Image src={AntonioHead} className="headshot" circle />
                        <h4 className="name">Antonio Gomes</h4>
                        <p className="gbctitle">President</p>
                    </Col>
                    <Col xs={4} md={2} mdOffset={1}>
                        <Image src={RobbieHead} className="headshot" circle />
                        <h4 className="name">Robbie Klages</h4>
                        <p className="gbctitle">Vice President</p>
                    </Col>
                    <Col xs={4} md={2} mdOffset={1}>
                        <Image src={MariaHead} className="headshot" circle />
                        <h4 className="name">Maria Petryk</h4>
                        <p className="gbctitle">Director of Marketing</p>
                    </Col>
                </Row>
            </Grid>
            <div className="text-center" style={{paddingTop: "20px", paddingBottom: "20px"}}>
                <h5>These volunteer students currently help run and organize the <strong>Gator Blockchain Club</strong></h5>
            </div>
        </div>
        <div className="partners">
            <h2 className="text-center" style={{paddingTop: "30px"}}>Our Partners</h2>
            <Grid>
                <Row>
                    <Col md={2} mdOffset={1} xs={4}>
                        <Image src={benPartner} className="partner" onClick={() => window.open('https://blockchainedu.org','mywindow')} style={{cursor: "pointer"}}/>
                    </Col>
                    <Col md={2} xs={4}>
                        <Image src={bloqPartner} className="partner" onClick={() => window.open('https://bloq.com','mywindow')} style={{cursor: "pointer"}}/>
                    </Col>
                    <Col md={2} xs={4}>
                        <Image src={chamberPartner} className="partner" onClick={() => window.open('https://digitalchamber.org','mywindow')} style={{cursor: "pointer"}}/>
                    </Col>
                    <Col md={2} xs={4} xsOffset={2} mdOffset={0}>
                        <Image src={consensysPartner} className="partner" onClick={() => window.open('https://new.consensys.net','mywindow')} style={{cursor: "pointer"}}/>
                    </Col>
                    <Col md={2} xs={4}>
                        <Image src={bitcoinPartner} className="partner" onClick={() => window.open('https://bitcoin.com','mywindow')} style={{cursor: "pointer"}}/>
                    </Col>
                </Row>
            </Grid>
        </div>
        <div className="contact">
            <h2 className="text-center" style={{paddingTop: "30px"}}>Contact Us</h2>
            <Grid>
                <Row className="contactIcons text-center">
                    <Col xs={4} md={2} mdOffset={3}>
                        <FontAwesomeIcon icon={faFacebook} size="6x" onClick={() => window.open('https://www.facebook.com/GatorBlockchain/','mywindow')} style={{cursor: "pointer"}}/>
                        <p>Facebook</p>
                    </Col>
                    <Col xs={4} md={2}>
                        <FontAwesomeIcon icon={faYoutube} size="6x" onClick={() => window.open('https://www.youtube.com/channel/UCFylnoedjPlU4ueG28fttGA/videos/','mywindow')} style={{cursor: "pointer"}}/>
                        <p>Youtube</p>
                    </Col>
                    <Col xs={4} md={2}>
                        <FontAwesomeIcon icon={faEnvelope} size="6x" onClick={() => window.open('mailto:ufbitcoin@gmail.com','mywindow')} style={{cursor: "pointer"}}/>
                        <p>Email</p>
                    </Col>
                </Row>
            </Grid>
        </div>
    </div>
);

export default LandingPage;