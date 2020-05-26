import React, { Component } from 'react'
import './ContentPanel.css'

// Paralax Content------------------------------------------
import { Parallax } from 'react-scroll-parallax';
// Paralax Content------------------------------------------


export class ContentPanel extends Component {
    render() {
        let imageSide = null;
        let textAnchor = null;
        if(this.props.direction === 'L'){ //for dynamic styling
            imageSide = 'row';
            textAnchor = 'left';
        }
        else{
            imageSide = 'row-reverse';
            textAnchor = 'right';
        }

        return ( 
            <Parallax className="Scroll" y={[-50, 80]} tagOuter="figure">
                <div className="ContentPane" style={{flexDirection: imageSide, textAlign: textAnchor}}>
                    <div className="ContentImage">
                        {this.props.children}
                    </div>
                    <div className="Text">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.content}</p>
                    </div>
                </div>
            </Parallax> 
        )        
    }
}

export default ContentPanel
