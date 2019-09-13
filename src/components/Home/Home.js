import React, { Component } from 'react';
import "./home.scss";
class Home extends Component {
    render(){
        return(
            <div className="section-home">
                <div className="home-container">
                    <div className="imagebox img-0"></div>
                    <div className="imagebox img-1"></div>
                    <div className="imagebox img-2"></div>
                    <div className="intro-text">
                        <div className="text-0">
                            WITH GREAT
                        </div>
                        <div className="text-1">
                            POWER,
                        </div>
                        <div className="text-2">
                            COME GREAT
                        </div>
                        <div className="text-3">
                            RESPONSABILITY
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
export default Home