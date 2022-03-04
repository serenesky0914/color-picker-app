// Image color Picker created by Roman Flössler - https://github.com/Roman-Flossler

import React, { Component } from 'react';
import Canvas from './Canvas';
import Color from './Color';
import './ImageColorPicker.css';

class ImageColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      pos: [props.pickerMaxSize[0]/3-20, props.pickerMaxSize[1]/2-20],
      ctx: null,
      mouseDown: undefined,
      loadedImg: undefined
    }
    this.fileInp = React.createRef();
    this.touchCatcher = React.createRef();
  }

  getCtx = (ctx) => {
    this.setState({ ctx: ctx });    
  }

  getColor = (x,y) => {
    const imgData = this.state.ctx.getImageData(x, y, 1, 1);
    return 'rgb(' + imgData.data[0] + ', ' + imgData.data[1] + ', ' + imgData.data[2] + ')';
  }

  onMouseDown = (e) => {
    this.setState({  
      pos: [e.nativeEvent.offsetX, e.nativeEvent.offsetY],
      mouseDown: true,
      color: this.getColor(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    });    
  }

  onMouseUp = () => {
    this.setState({ mouseDown: false });
    this.props.onColorPicked && this.props.onColorPicked(this.state.color);
  }

  onMouseMove = (e) => {    
    if (this.state.mouseDown) {
      let color = this.getColor(e.nativeEvent.offsetX, e.nativeEvent.offsetY) 
      this.setState({  
        pos: [e.nativeEvent.offsetX, e.nativeEvent.offsetY],
        color: color
      });
      this.props.onColorPicking && this.props.onColorPicking(color);
    }     
  }
  
  onTouchMove = (e) => {    
    e.preventDefault();    
    let bcr = e.target.getBoundingClientRect();
    let x = e.targetTouches[0].clientX - bcr.x;
    let y = e.targetTouches[0].clientY - bcr.y;
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;
    x = x > bcr.width-1 ? bcr.width-1 : x;
    y = y > bcr.height-1 ? bcr.height-1 : y;
    let color = this.getColor(x, y); 
    this.setState({
        pos: [ x , y],
        mouseDown: true,
        color: color
      });
    this.props.onColorPicking && this.props.onColorPicking(color);
  }

  componentDidMount() {
    this.touchCatcher.current.addEventListener('touchmove', this.onTouchMove, { passive: false });
  }  
  componentWillUnmount() {
    this.touchCatcher.current.removeEventListener('touchmove', this.onTouchMove);
  }

  onFileChange = () => {
    let loadedImg = new Image();
    loadedImg.onload = () => {
      this.setState( {loadedImg: loadedImg} )    
    }
    if (this.fileInp.current.files[0]) {
      loadedImg.src = URL.createObjectURL(this.fileInp.current.files[0]);
    }
  }

  render() {
    return (
      <div>
      <div style={{ borderColor: this.state.color, borderRadius: this.props.roundness }} id='frame' >
        <Canvas loadedImg={this.state.loadedImg} imgUrl={this.props.imgUrl} sizeX={this.props.pickerMaxSize[0]} sizeY={this.props.pickerMaxSize[1]} 
                roundness={this.props.roundness} getCtx={this.getCtx} ></Canvas>
        
        <Color color={this.state.color} pos={this.state.pos} mouseDown={this.state.mouseDown} 
        onColorPickedText={this.props.onColorPickedText} showRGB={this.props.showRGB} width={this.props.pickerMaxSize[0]} ></Color>
        
        <div id='mousecatcher'  ref={this.touchCatcher} onMouseMove={ this.onMouseMove } onMouseDown={this.onMouseDown}  onMouseUp={ this.onMouseUp } onTouchEnd={ this.onMouseUp }
        style={ { borderRadius: this.props.roundness-13, cursor: this.state.mouseDown ? 'none' : 'default'  }} ></div>
      </div>
      <input ref={this.fileInp} type="file" onChange={this.onFileChange} style={this.props.selectImgButton ? { display:'block' } : { display:'none' } }></input>
      </div>
    );
  }
}

export default ImageColorPicker;
