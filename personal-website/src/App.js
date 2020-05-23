import React, { Component} from 'react';
import './App.css';
import ContentPanel from './ContentPanel/ContentPanel';

// Paralax Content------------------------------------------
import { ParallaxProvider } from 'react-scroll-parallax';
// Paralax Content------------------------------------------

//Images----------------------------------------------------


class App extends Component {
  state = {
    panels: [
      {title: "Hi, I'm Jason" , content: "This is my website that I've built using React JS" , picture: './Profile.JPG' , direction: 'L'},
      {title: 'About Me' , content: 'Software engineering student at Western University' , picture: "./AboutMe.jpg" , direction: 'R'},
      {title: 'My Work' , content: 'Experienced in OOP and front-end web development' , picture: "./Work.jpg" , direction: 'L'},
      {title: 'Projects' , content: 'Some of my Projects include Android applications for automated equipment and use of machine learning for stock prediction' , picture: "./Project1.jpg" , direction: 'R'},
      {title: 'Interets' , content: 'I enjoy running, cycling and ultimate' , picture: "./Interest.jpg" , direction: 'L'},
      {title: 'contact' , content: 'Connect with me!' , picture: "contact.jpg" , direction: 'R'}
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
            ></ContentPanel>
            <ContentPanel
              title={this.state.panels[1].title}
              content={this.state.panels[1].content}
              direction={this.state.panels[1].direction}
            ></ContentPanel>
            <ContentPanel
              title={this.state.panels[2].title}
              content={this.state.panels[2].content}  
              direction={this.state.panels[2].direction}   
            ></ContentPanel>
            <ContentPanel
              title={this.state.panels[3].title}
              content={this.state.panels[3].content}
              direction={this.state.panels[3].direction}
            ></ContentPanel>
            <ContentPanel
              title={this.state.panels[4].title}
              content={this.state.panels[4].content}
              direction={this.state.panels[4].direction}
           ></ContentPanel>
            <ContentPanel
              title={this.state.panels[5].title}
              content={this.state.panels[5].content}
              direction={this.state.panels[5].direction}
            ></ContentPanel>
          </div>
        </div>
      </ParallaxProvider>
    )
  }
}

export default App;
