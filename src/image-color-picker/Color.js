import React from 'react';
import './Color.css';

const Color = ({ color, pos, mouseDown, onColorPickedText, showRGB, width }) => {
    let zindex = (mouseDown===false) ? 3 : 1;
    let translate =  ( pos[0] > width-133 ) ? 'translate(calc(-100% - 18px), 0px)' : 'none';
    const pStyle = { left:pos[0]+8, top:pos[1]+8, zIndex:zindex, transform: translate };
    const dotStyle = { left: pos[0]-9, top: pos[1]-9, background: color };
    let display = showRGB ? 'show' : 'hide';

    const renderP = () => {
        if (mouseDown) {  
            return <p  id='showinfo' className={display} style={pStyle}>{color}</p>
        } else if (mouseDown === false) {
            return <p id='showinfo' style={pStyle} ><span className={display}>{color}</span> {onColorPickedText} </p>
        } else {
            return <p id='showinfo' style={pStyle} >Select the color</p>
        }
    }
    
    return (
        <div >
        <div id='pointer' style={dotStyle}></div>
            { renderP() }
        </div>
    );
}

export default Color;
