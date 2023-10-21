import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Layout.css'

const Layout = () => {
    return (
        <div className="layout-container">
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <Navbar.Brand className="espacio">Camila Aylen Lopez</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end">
                            <Link to={'/'} className='linkEstilo espacio'>Home</Link>
                            <Link to={'/InfoMia'} className='linkEstilo espacio'>Información mia</Link>
                            <Link to={'/MisCreaciones'} className='linkEstilo espacio'>Mis creaciones</Link>
                            <Link to={'/Favoritos'} className='linkEstilo espacio'>Favoritos</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="content">
                <Outlet />
            </div>
            <footer className="border-top text-muted responsiveSiteFooter footer">
                <div className="responsiveSiteFooter__contents gr-container-fluid">
                    <div className="gr-row">
                        <div className="gr-col gr-col-md-3 gr-col-lg-6">
                            <div className="gr-row">
                                <div>
                                    <div className="responsiveSiteFooter__socialLinkWrapper horizontal">
                                        <h5 className="responsiveSiteFooter__heading">Mis redes sociales</h5>
                                        <div className='espacioFooter'>
                                            <a className="responsiveSiteFooter__socialLink hjgjuf" href="https://www.facebook.com/">
                                                <img alt="Facebook" src="https://s.gr-assets.com/assets/site_footer/footer_facebook-ea4ab848f8e86c5f5c98311bc9495a1b.svg" />
                                            </a>
                                            <p className='redPosicion'>Facebook</p>
                                        </div>
                                        <div className='espacioFooter'>
                                        <a className="responsiveSiteFooter__socialLink hjgjuf" href="https://twitter.com/">
                                            <img alt="Twitter" src="https://s.gr-assets.com/assets/site_footer/footer_twitter-126b3ee80481a763f7fccb06ca03053c.svg" />
                                        </a>
                                        <p className='redPosicion'>Twitter</p>
                                        </div>
                                        <div className='espacioFooter'>
                                        <a className="responsiveSiteFooter__socialLink hjgjuf" href="https://www.instagram.com/">
                                            <img alt="Instagram" src="https://s.gr-assets.com/assets/site_footer/footer_instagram-d59e3887020f12bcdb12e6c539579d85.svg" />
                                        </a>
                                        <p className='redPosicion'>Instagram</p>
                                        </div>
                                        <div className='espacioFooter'>
                                        <a className="responsiveSiteFooter__socialLink hjgjuf" href="https://www.linkedin.com/">
                                            <img alt="LinkedIn" src="https://s.gr-assets.com/assets/site_footer/footer_linkedin-5b820f4703eff965672594ef4d10e33c.svg" />
                                        </a>
                                        <p className='redPosicion'>Likedin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
    </div >
    )
}

export default Layout