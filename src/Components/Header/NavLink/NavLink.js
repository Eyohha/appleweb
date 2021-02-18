import React, { Component } from 'react'

export default class NavLink extends Component
{
    render()
    {
        return (
            <div>
                <li><a href={this.props.url}>{this.props.name}</a></li>
            </div>
        )
    }
}
