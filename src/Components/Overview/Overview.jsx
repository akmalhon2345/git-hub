import React from 'react';
import './overview.css';
import Edid from '../Sideba/Sidebar';
import { LiaBookSolid } from "react-icons/lia";
import Footer from '../footor/Footor';


const Overview = () => {
    return (
        <div className="overview_wrapper">
            <Edid />
            <div className="overview_container">
                <div className="over_top">
                    <h2>Pinned</h2>
                    <p>Customize your pins</p>
                </div>

                <div className="overview_grid">
                    <div className="grid_cards">
                        <div className="card_header">
                            <h1>Butterfly-animation</h1>
                            <p className="public_tag">Public</p>
                        </div>
                        <h2>CSS-based butterfly animation</h2>
                        <div className="repo_meta">
                            <p className="language_tag">
                                <span className="language_color css"></span> CSS
                            </p>
                        </div>
                    </div>


                    <div className="grid_cards">
                        <div className="card_header">
                            <h1>Butterfly-animation</h1>
                            <p className="public_tag">Public</p>
                        </div>
                        <h2>CSS-based butterfly animation</h2>
                        <div className="repo_meta">
                            <p className="language_tag">
                                <span className="language_color js"></span>JS
                            </p>
                        </div>
                    </div>


                    <div className="grid_cards">
                        <div className="card_header">
                            <h1>Butterfly-animation</h1>
                            <p className="public_tag">Public</p>
                        </div>
                        <h2>CSS-based butterfly animation</h2>
                        <div className="repo_meta">
                            <p className="language_tag">
                                <span className="language_color html"></span> HTML
                            </p>
                        </div>
                    </div>


                    <div className="grid_cards">
                        <div className="card_header">
                            <h1>Butterfly-animation</h1>
                            <p className="public_tag">Public</p>
                        </div>
                        <h2>CSS-based butterfly animation</h2>
                        <div className="repo_meta">
                            <p className="language_tag">
                                <span className="language_color html"></span> HTML
                            </p>
                        </div>
                    </div>

                </div>


    <div className="contribution-activity">
    <h1>Contribution Activity</h1>

      <div className="contribution-summary">
        <p>July 2025</p>
        <p className="icon-text">
           Created 3 repositories
        </p>
      </div>

      <div className="repository">
        <p className="repo-name">Akmlahon/Restoran-web-sayti</p>
        <p className="language">JavaScript</p>
      </div>
      <div className="repository">
        <p className="repo-name">Akmlahon/Restoran-web-sayti</p>
        <p className="language">JavaScript</p>
      </div>
      <div className="repository">
        <p className="repo-name">Akmlahon/Restoran-web-sayti</p>
        <p className="language">JavaScript</p>
      </div>
      <div className="button">

        <div className="button2">
      <button> Show more activity</button>

      </div>
      <p>Seeing something unexpected? Take a look at the GitHub profile guide</p>
      </div>
    </div>




                </div>
             
            </div>
    );
};

export default Overview;
