import React, { Component} from 'react';
import './App.css';
import ContentPanel from './ContentPanel/ContentPanel';

// Paralax Content------------------------------------------
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
// Paralax Content------------------------------------------

class App extends Component {
  state = {
    panels: [
      {title: 'Welcome' , content: 'My Name is Jason'},
      {title: 'About Me' , content: 'I am entering 3rd year at Western University'},
      {title: 'My Work' , content: 'I am in sfotware engineering, I works mainly with Java and Javascript (React)'},
      {title: 'Projects' , content: 'My projects ranging from Android development to machine learning'},
      {title: 'Interets' , content: 'I enjoy running, cycling and Ultimate'},
      {title: 'contact' , content: 'Insert Various Links'}
    ]
  }
  
  render () {
    return(
      <ParallaxProvider>
        <div className="App">
          <header className="App-header">
          <h1>Jason Liu</h1>
        </header>
        <body className="Custom">
        

          <ContentPanel
            title={this.state.panels[0].title}
            content={this.state.panels[0].content}
          ></ContentPanel>
          <ContentPanel
            title={this.state.panels[1].title}
            content={this.state.panels[1].content}
          ></ContentPanel>
          <ContentPanel
            title={this.state.panels[2].title}
            content={this.state.panels[2].content}
          ></ContentPanel>
          <ContentPanel
            title={this.state.panels[3].title}
            content={this.state.panels[3].content}
          ></ContentPanel>
          <ContentPanel
            title={this.state.panels[4].title}
            content={this.state.panels[4].content}
          ></ContentPanel>
          <ContentPanel
            title={this.state.panels[5].title}
            content={this.state.panels[5].content}
          ></ContentPanel>

        
        </body>
        
      </div>
      </ParallaxProvider>
    )
  }
}

export default App;
