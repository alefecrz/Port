import React, { Component } from 'react';
import './style.css';

import logoImg from '../../assets/img/logo.svg'

import githubIcon from '../../assets/icons/icon-github.svg'
import facebookIcon from '../../assets/icons/icon-facebook.svg'
import instagramIcon from '../../assets/icons/icon-instagram.svg'
import linkedinIcon from '../../assets/icons/icon-linkedin.svg'
import mauseIcon from '../../assets/icons/icon-mause.svg'

class Home extends Component {
    render() {
        return (
            <div className= "home-conteiner">
                <img src={ logoImg } alt=""/>
                <div className="text-conteiner">
                    <h1>HI! I'M  <span>ÁLEFE CRUZ</span></h1>
                    <p>I AM <span>FULL STACK</span> DEVELOPER</p>
                    <button className="button" type="submit">
                        Ver Projetos
                    </button>
                </div>
                <div className="icons-conteiner">
                    <img src={ githubIcon } alt=""/>
                    <img src={ linkedinIcon } alt=""/>
                    <img src={ facebookIcon } alt=""/>
                    <img src={ instagramIcon } alt=""/>
                </div>
                <div className="down-conteiner">
                    <img src={ mauseIcon } alt=""/>
                    <p>SCROLL DOWN</p>
                </div>
            </div>
        );
    }
}

export default Home;