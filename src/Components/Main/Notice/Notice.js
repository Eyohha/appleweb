import React, { Component } from 'react'
import './Notice.css'

export default class Notice extends Component
{
    render()
    {
        return (
            <section className="notice">
                <div className="container">
                    <div className="opening">We're open for you.</div>
                    <div className="details">
                        Our retail stores are closed, but you can buy our products here online
                        and get fast, <br /> free delivery. If you need help finding the right product
                        or have a question on your order, <br /> chat online with a Specialist or call
                        1-800-MY-APPLE. <br /> For service and support, visit <a href="https://support.apple.com/">support.apple.com</a>.
                    </div>
                </div>
            </section>
        )
    }
}
