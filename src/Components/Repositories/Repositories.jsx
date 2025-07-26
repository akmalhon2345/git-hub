import React from 'react'
import Edid from '../Sideba/Sidebar'
import './repositories.css'

const Repositories = () => {
  return (
    <div className='overview_wrapper repo'>
        <Edid/>
            <div className="overview_grid1">
                    <div className="grid_cards grid_cards1">
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


                    <div className="grid_cards grid_cards1">
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


                    <div className="grid_cards grid_cards1">
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


                    <div className="grid_cards grid_cards1">
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

    </div>
  )
}

export default Repositories