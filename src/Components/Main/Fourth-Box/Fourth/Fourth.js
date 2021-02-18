import React, { Component } from 'react'
import FourthProps from '../FourthProps/FourthProps'
import './Fourth.css'
import '../../../../Assets/style.css'


export default class Fourth extends Component
{
    render()
    {
        return (
            <section className="fourth-box">
                <div className="container-fluid">
                    <div className="row">

                        <FourthProps
                            internalclassName="left-internal-box"
                            containerclassName='left-container'
                            secondItem='iPhone 11'
                            moto='Just the right amount of everything.'
                            priceTwo={['From $18.70/mo or $499 with trade‑in.', <sup>1</sup>]}
                            listLinks='list-links'
                            learn='Learn More'
                            buy='Buy'
                        />

                        <FourthProps
                            internalclassName="right-internal-box"
                            containerclassName='right-container'
                            secondItem='Get the latest CDC response to COVID-19.'
                            // moto='Just the right amount of everything.'
                            listLinks='list-links'
                            // learn='Watch the PSA'
                            buy='Watch the PSA'
                        />

                    </div>
                </div>
            </section>
        )
    }
}
