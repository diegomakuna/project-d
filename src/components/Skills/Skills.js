import React, { Component } from 'react';
import "./skills.scss";

class Skills extends Component {
    render(){
        
        return(
            <div className="section-skills">
                <div className="container-section">
                <div className="front-container">
                    <h2>FRONT</h2>
                    <ul>
                        <li>
                            <h4>html</h4>
                            <div className="percent">
                                <div className="parcent-count"></div>
                                <div className="parcent-background"></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="back-container">
                <h2>BACK</h2>
                </div>
            </div>
            </div>
        )
    }
}
export default Skills