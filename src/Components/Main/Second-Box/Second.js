import React, { Component } from 'react'
import './Second.css'
import '../../../Assets/style.css'

export default class Second extends Component
{
    render()
    {
        return (
            <section className="second-box">
                <div className="container">
                    <div className="new-alert">New</div>
                    <div className="item-name">
                        MacBook Air
                    </div>
                    <div className="moto">
                        Twice the speed. Twice the storage.
                    </div>
                    <div className="price">
                        From $999.
                    </div>
                    <div className="list-links">
                        <ul>
                            <li><a href="https://www.apple.com/ipad-pro/">Learn More</a></li>
                            <li><a href="https://www.apple.com/shop/buy-ipad/ipad-air">Buy</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
