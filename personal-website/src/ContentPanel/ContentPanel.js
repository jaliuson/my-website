import React, { Component } from 'react'
import './ContentPanel.css'

// Paralax Content------------------------------------------
import { Parallax } from 'react-scroll-parallax';
// Paralax Content------------------------------------------

export class ContentPanel extends Component {
    render() {
        return (
            <Parallax className="Scroll" y={[-50, 80]} tagOuter="figure">
                <div className="ContentPane">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.content}</p>
                </div>
            </Parallax> 
        )
    }
}

export default ContentPanel
