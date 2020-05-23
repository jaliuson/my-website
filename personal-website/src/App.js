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
      {title: 'Hi there,' , content: "I'm Jason" , picture: './Profile.JPG' , direction: 'L'},
      {title: 'About Me' , content: 'Entering 3rd year at Western University' , picture: "./AboutMe.jpg" , direction: 'R'},
      {title: 'My Work' , content: 'I am in sfotware engineering, I work with Java and Javascript (React)' , picture: "./Work.jpg" , direction: 'L'},
      {title: 'Projects' , content: 'My projects ranging from Android development to machine learning' , picture: "./Project1.jpg" , direction: 'R'},
      {title: 'Interets' , content: 'I enjoy running, cycling and Ultimate' , picture: "./Interest.jpg" , direction: 'L'},
      {title: 'contact' , content: 'Insert Various Links' , picture: "contact.jpg" , direction: 'R'}
    ]
  }
  
  render () {
    return(
      <ParallaxProvider>
        <div className="App">
          <header className="App-header">
            <h1>Jason Liu</h1>
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
