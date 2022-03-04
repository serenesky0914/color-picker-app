import React, { Component } from 'react';
import ImageColorPicker from './image-color-picker/ImageColorPicker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
// import ChromePicker from 'react-color';

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

onChangeColor = (color) => {
  console.log(color);
  this.setState( {color: color} );  
}

  render() {
    return (
        <div className="App container container-fluid">
          <h1 style={{color: this.state.color,  textShadow: '0 0 8px' + this.state.color }} >Color Picker App</h1>
          <header className="App-header mb-5">            
            <ImageColorPicker imgUrl={'rgb.png'} pickerMaxSize={[300,300]} roundness={200} showRGB={true}
                              onColorPicking={this.changeColor} onColorPicked={this.changeTitle} onColorPickedText={'is the new tab title'}  >
            </ImageColorPicker>
            <br />
            <ImageColorPicker selectImgButton={true} imgUrl={'palette.png'} pickerMaxSize={[this.getResponsiveWidth(555),300]} onColorPicking={this.changeColor} 
                              onColorPicked={this.changeColor} roundness={16} >
            </ImageColorPicker>
          </header>
          
          <div className="card change-color-board text-center">
            <div className="card-body">
              <p className='title'>
                Edit and Convert Color Code
              </p>
              <div className='sel-color' style={{backgroundColor: this.state.color,  boxShadow: '0 0 3px' + this.state.color }}></div>
              <div>
                {/* <ChromePicker onChange={this.onChangeColor}>

                </ChromePicker> */}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
