import React, { Component } from 'react'
import FourthProps from '../Fourth-Box/FourthProps/FourthProps'
import './Fifth.css'
import '../../../Assets/style.css'
import tvLogo from '../../../Assets/Apple-icons/tvLogo.png'
import banker from '../../../Assets/Apple-images/banker.png'
import watchLogo from '../../../Assets/Apple-icons/watchLogo.png'



export default class Fifth extends Component
{
    render()
    {
        return (
            <section className="fifth-box">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-internal-box col-sm-12 col-md-6 col-lg-6">
                            <div className="left-container">
                                <div className="top-logo">
                                    <div className="icon">
                                        <img className='icon' src={tvLogo} />
                                    </div>
                                </div>
                                <div className="movie-list-title">
                                    <img src={banker} />
                                </div>
                                <div className="watch-now">
                                    <a href="#">Watch now on the Apple TV App</a>
                                </div>
                            </div>
                        </div>

                        <div className="right-internal-box col-sm-12 col-md-6 col-lg-6">
                            <div className="right-container">
                                <div className="top-logo">
                                    <div className="icon">
                                        <img src={watchLogo} />
                                    </div>
                                </div>
                                <div className="moto-two">
                                    {['With the Always-On Retina display.', <br />, 'You’ve never seen a watch like this.']}
                                </div>
                                <div className="list-links">
                                    <ul>
                                        <li><a href="https://www.apple.com/ipad-pro/">Learn More</a></li>
                                        <li><a href="https://www.apple.com/shop/buy-ipad/ipad-air">Buy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
