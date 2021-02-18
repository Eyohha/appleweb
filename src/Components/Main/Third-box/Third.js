import React, { Component } from 'react'
import './Third.css'
import '../../../Assets/style.css'

export default class Third extends Component
{
    render()
    {
        return (
            <section className="third-box">
                <div className="container">
                    <div className="item-name">
                        iPhone 11 Pro
                    </div>
                    <div className="moto">
                        Pro Camera. Pro Display. Pro Performance.
                    </div>
                    <div className="price">
                        From $24.95/mo or $599 with trade‑in.
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
