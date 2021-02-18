import React, { Component } from 'react'

export default class FourthProps extends Component
{
    render()
    {
        return (
            <div className={`${this.props.internalclassName} col-sm-12 col-md-6 col-lg-6`}>
                <div className={this.props.containerclassName}>
                    <div className="top-logo">
                        <div className="icon">
                            <img src={this.props.logo} />
                        </div>
                    </div>
                    <div className="second-item-name">
                        {this.props.secondItem}
                    </div>
                    <div className="moto-two">
                        {this.props.moto}
                    </div>
                    <div className="price-two">
                        {this.props.priceTwo}
                    </div>
                    <div className={`${this.props.listLinks} cdcLink play`}>
                        <ul>
                            <li className='firstLink'><a href="#">{this.props.learn}</a></li>
                            <li className='secondLink'><a href="#">{this.props.buy}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
