import React, { Component } from 'react'
import FourthProps from '../Fourth-Box/FourthProps/FourthProps'
import './Sixth.css'
import '../../../Assets/style.css'
import arcadeLogoLarge from '../../../Assets/Apple-icons/arcadeLogoLarge.png'


export default class Sixth extends Component
{
    render()
    {
        return (
            <section className="sixth-box">
                <div className="container-fluid">
                    <div className="row">
                        <FourthProps
                            internalclassName="left-internal-box"
                            containerclassName='left-container'
                            logo={arcadeLogoLarge}
                            moto='Agent 8 is a small hero on a big misssion.'
                            // priceTwo={['From $18.70/mo or $499 with trade‑in.', <sup>1</sup>]}
                            listLinks='list-links'
                            learn={['Play Now', <sup>2</sup>]}
                            buy='Learn about Apple Arcade'
                        />


                        <FourthProps
                            internalclassName="right-internal-box"
                            containerclassName='right-container'
                            secondItem='Apple Card Monthly Installments'
                            moto='Pay for your next iPhone over time, interest-free with Apple Card'
                            listLinks='list-links'
                            learn='Learn More'
                            buy='Apply Now'
                        />
                    </div>
                </div>
            </section>
        )
    }
}
