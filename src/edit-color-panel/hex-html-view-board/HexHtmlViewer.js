
import React, { useState, Component } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import Form from 'react-bootstrap/Form';
import ColorHelpers from '../../ColorHelper';



const HexHtmlViewer = (param) => {
    
    const onChange = (e) => {
    }
    return (
        <>
            <Form.Label htmlFor="basic-url">HEX & HTML</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="hex-addon">
                    HEX
                </InputGroup.Text>
                <FormControl value={ColorHelpers.RGBToHex(param.rgbValue).toString()} aria-describedby="hex-addon" 
                    onChange={onChange}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="rgb-addon">
                    HTML / CSS
                </InputGroup.Text>
                <FormControl value={param.rgbValue}
                    onChange={onChange}
                aria-describedby="rgb-addon" />
            </InputGroup>
        </>
    );
}

export default HexHtmlViewer;