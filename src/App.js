import React, { Component } from 'react';
import ImageColorPicker from './image-color-picker/ImageColorPicker';
import ConvertedColorBoard from './edit-color-panel/edit-color-board/ConvertedColorBoard';
import HexHtmlViewer from './edit-color-panel/hex-html-view-board/HexHtmlViewer.js';
import ColorController from './edit-color-panel/color-controller/ColorController.js';
import ColorHelpers from './ColorHelper';


import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 'rgb(58 68 75)',
      screenWidth: window.screen.width
    }
    this.onScreenResize();
  }


  changeTitle = (color) => {
    document.title = ' 🎨 ' + color;
  }

  changeColor = (color) => {
    this.setState({ color: color });
  }

  getResponsiveWidth = (width) => {
    let maxWidth = this.state.screenWidth - 24 - this.state.screenWidth / 20;
    return width > maxWidth ? maxWidth : width;
  }

  onScreenResize = () => {
    window.addEventListener('resize', () => {
      this.setState({ screenWidth: window.screen.width });
    });
  }

  render() {
    return (
      <div className="App container container-fluid">
        <p className='app-title' style={{ textShadow: '0 0 8px' }} >Color Picker App</p>
        <header className="App-header mb-5">
          <ImageColorPicker imgUrl={'rgb.png'} pickerMaxSize={[300, 300]} roundness={200} showRGB={true}
            onColorPicking={this.changeColor} onColorPicked={this.changeTitle} onColorPickedText={'is the new tab title'}  >
          </ImageColorPicker>
          <br />
          <ImageColorPicker selectImgButton={true} imgUrl={'palette.png'} pickerMaxSize={[this.getResponsiveWidth(555), 300]} onColorPicking={this.changeColor}
            onColorPicked={this.changeColor} roundness={16} >
          </ImageColorPicker>
        </header>

        <div className="card change-color-board text-center shadow">
          <div className="card-body">
            <p className='title'>
              Edit and Convert Color Code
            </p>
            <div>
              <ConvertedColorBoard style={{ backgroundColor: this.state.color, boxShadow: '0 0 3px' + this.state.color }} />
            </div>

            <div className='row'>
              <div className='col-sm-6'>
                <HexHtmlViewer rgbValue={this.state.color}/>
              </div>
              <div className='col-sm-6'>
                <ColorController rgbValue={this.state.color}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
