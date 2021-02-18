// for the sections, refer the probs vid of sep 29 classNameName at 1:11:00
import React, { Component } from 'react';
import './First.css';
import '../../../Assets/style.css'

class First extends Component
{

    render()
    {

        return (
            <section className="first-box">
                <div className="classNameNamener">
                    <div className="new-alert">New</div>
                    <div className="item-name">
                        iPad Pro
                    </div>
                    <div className="list-links">
                        <ul>
                            <li><a href="https://www.apple.com/ipad-pro/">Learn More</a></li>
                            <li><a href="https://www.apple.com/shop/buy-ipad/ipad-air">Buy</a></li>
                        </ul>
                    </div>
                    <div className="price-avail row">
                        <div className="col-sm-12 col-md-6 text-md-right left-caption">iPad Pro available starting 3.25</div>
                        <div className="col-sm-12 col-md-6 text-md-left right-caption">Magic Keyboard coming in May</div>
                    </div>
                </div>
            </section>
        )
    }
}
export default First;