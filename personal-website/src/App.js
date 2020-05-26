import React, { Component} from 'react';
import './App.css';
import ContentPanel from './ContentPanel/ContentPanel';
import './ContentPanel/ContentPanel.css'

// Paralax Content------------------------------------------
import { ParallaxProvider } from 'react-scroll-parallax';
// Paralax Content------------------------------------------

//Images----------------------------------------------------
import './images/AboutMe.jpg';
import './images/Contact.jpg';
import './images/Interest.jpg';
import './images/Profile.JPG';
import './images/Project1.jpg';
import './images/Work.jpg';

class App extends Component {
  state = {
    panels: [
      {title: "Hi, I'm Jason" , content: "This is my website that I've built using React JS" , direction: 'L'},
      {title: 'About Me' , content: 'Software engineering student at Western University' , direction: 'R'},
      {title: 'My Work' , content: 'Experienced in OOP and front-end web development' , direction: 'L'},
      {title: 'Projects' , content: 'Some of my Projects include Android applications for automated equipment and use of machine learning for stock prediction' , direction: 'R'},
      {title: 'Interets' , content: 'I enjoy running, cycling and ultimate' , direction: 'L'},
      {title: 'contact' , content: 'Connect with me!' , direction: 'R'}
    ]
  }
  
  render () {
    return(
      <ParallaxProvider>
        <div className="App">
          <header className="App-header">
            <h1>Welcome!</h1>
          </header>
          <div className="Custom">
            <ContentPanel
              title={this.state.panels[0].title}
              content={this.state.panels[0].content}
              direction={this.state.panels[0].direction}
            ><img src={require('./images/Profile.JPG')} className="ContentImage"></img></ContentPanel>
            <ContentPanel
              title={this.state.panels[1].title}
              content={this.state.panels[1].content}
              direction={this.state.panels[1].direction}
            ><img src={require('./images/AboutMe.jpg')} className="ContentImage"></img></ContentPanel>
            <ContentPanel
              title={this.state.panels[2].title}
              content={this.state.panels[2].content}  
              direction={this.state.panels[2].direction}   
            ><img src={require('./images/Work.jpg')} className="ContentImage"></img></ContentPanel>
            <ContentPanel
              title={this.state.panels[3].title}
              content={this.state.panels[3].content}
              direction={this.state.panels[3].direction}
            ><img src={require('./images/Project1.jpg')} className="ContentImage"></img></ContentPanel>
            <ContentPanel
              title={this.state.panels[4].title}
              content={this.state.panels[4].content}
              direction={this.state.panels[4].direction}
           ><img src={require('./images/Interest.jpg')} className="ContentImage"></img></ContentPanel>
            <ContentPanel
              title={this.state.panels[5].title}
              content={this.state.panels[5].content}
              direction={this.state.panels[5].direction}
            ><img src={require('./images/Contact.jpg')} className="ContentImage"></img></ContentPanel>
          </div>
        </div>
      </ParallaxProvider>
    )
  }
}

export default App;
