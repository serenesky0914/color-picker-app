import React, { Component } from 'react';
import ImageColorPicker from './image-color-picker/ImageColorPicker';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: '',
      screenWidth: window.screen.width
    }
    this.onScreenResize();
  }


changeTitle = (color) => {
  document.title = ' 🎨 ' + color;
}

changeColor = (color) => {
  this.setState( {color: color} );  
}

getResponsiveWidth = (width) => { 
  let maxWidth = this.state.screenWidth - 24 - this.state.screenWidth/20;
  return width > maxWidth ? maxWidth : width;
}

onScreenResize = () => {
  window.addEventListener('resize', () => {
    this.setState({screenWidth: window.screen.width});
  });
}


  render() {
    return (
        <div className="App">
        <h1 style={{color: this.state.color,  textShadow: '0 0 11px' + this.state.color }} >Color Picker App</h1>
          <header className="App-header">            
            <ImageColorPicker imgUrl={'rgb.png'} pickerMaxSize={[300,300]} roundness={200} showRGB={true}
                              onColorPicking={this.changeColor} onColorPicked={this.changeTitle} onColorPickedText={'is the new tab title'}  >
            </ImageColorPicker>
            <br />
            <ImageColorPicker selectImgButton={true} imgUrl={'palette.png'} pickerMaxSize={[this.getResponsiveWidth(555),300]} onColorPicking={this.changeColor} 
                              onColorPicked={this.changeColor} roundness={16} >
            </ImageColorPicker>
          </header>
        </div>
    );
  }
}

export default App;
