import React, { Component } from 'react';
import "./about.scss";

class About extends Component {
    render(){
        
        return(
            <div className="section-about">
                <div className="about-container">
                    <div className="since-text">SINCE 1987</div>
                    <div className="image-about"></div>
                    <div className="description-container">
                        <div className="description-tilte">About Me</div>
                        <div className="description-text">
                        Olá, sou DIEGO ARAUJO, desevolvedor web de São Paulo, Brasil. Tenho mais de 11 anos de experiência trabalhando com diferentes cenários e tecnologias,acredito ser flexível para adquirir conhecimento e aprimorar minhas habilidades a fim de contribuir para a resolução de  problemas. Neste site você verá um pouco dos meus trabalhos e experimentos pessoais.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About