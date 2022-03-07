import React, { useState, Component } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import './ColorController.css';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import ReactDOM from 'react-dom';
import ColorHelpers from '../../ColorHelper';


class ColorController extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: [
                {
                    type: 'RGB – Red, Green, Blue',
                    label: ['Red', 'Green', 'Blue', 'Opacity'],
                    color: [0, 0, 0, 0],
                    value_name: ['Red_v', 'Green_v', 'Blue_v', 'Opacity_v'],
                    range_slider: ['Red_r', 'Green_r', 'Blue_r', 'Opacity_r'],
                },
                // {
                //     type: 'HSL – Hue, Saturation, Lightness',
                //     label: ['Hue', 'Saturation', 'Lightness', 'Opacity'],
                //     value_name: ['Red_v', 'Green_v', 'Blue_v', 'Opacity_v'],
                //     range_slider: ['Red_r', 'Green_r', 'Blue_r', 'Opacity_r'],
                // },
                // {
                //     type: 'HSV – Hue, Saturation, Value',
                //     label: ['Hue', 'Saturation', 'Value', 'Opacity'],
                //     value_name: ['Hue_v', 'Saturation_v', 'Value_v', 'Opacity_v'],
                //     range_slider: ['Hue_r', 'Saturation_r', 'Value_r', 'Opacity_r'],
                // },
                // {
                //     type: 'CMYK – Cyan, Magenta, Yellow, Black',
                //     label: ['Cyan', 'Magenta', 'Yellow', 'Black', 'Opacity'],
                //     value_name: ['Cyan_v', 'Magenta_v', 'Yellow_v', 'Black_v', 'Opacity_v'],
                //     range_slider: ['Cyan_r', 'Magenta_r', 'Yellow_r', 'Black_r', 'Opacity_r'],
                // }
            ]
        };
        this.selectedOp =  this.state.options[0];
        this.value = 0;
        console.log('changed_Color : ' , ColorHelpers);

    }
    onChangeColorOption(e, index){
        if (index==0) {
            this.selectedOp = this.state.options[index];
        }
        this.selectedOp = this.state.options[e.target.value];
        const element = this.fnBindData(this.selectedOp.label);
        ReactDOM.render(element, document.getElementById('inputColorGroup'));
    }

    onChangeEvent(changeEvent){
        console.log(changeEvent.target.value);
    }

    onChangeEachColorParam(changeEvent){
        console.log(changeEvent.target.value);
    }

    fnBindData(parm){
        
        console.log('changed_Color : ' , ColorHelpers);
        const red = ColorHelpers.redColorNum(this.props.rgbValue);
        const green = ColorHelpers.greenColorNum(this.props.rgbValue);
        const blue = ColorHelpers.blueColorNum(this.props.rgbValue);

        this.selectedOp.color = [red, green, blue, 0];
       
        return parm.map((val, index) => 
            <InputGroup className="mb-2" id={'group_' + index}  key={'group_' + index}>
                <InputGroup.Text className='label' id={val + '_' + index}>{val}</InputGroup.Text>
                <FormControl className='ml-3' aria-describedby={val + '_' + index} value={this.selectedOp.color[index]} onChange={changeEvent => this.onChangeEachColorParam(changeEvent)} />
                <RangeSlider
                    key={index}
                    className='color-range'
                    value={this.selectedOp.color[index]} 
                    onChange = {changeEvent => this.onChangeEvent(changeEvent)}
                    max={256}
                    step={1}
                />
            </InputGroup>
        );
    }
    
    render() {
        
        return (
            <>
                <Form.Group controlId="custom-select" className='mb-4'>
                    <Form.Label>Customized Select</Form.Label>
                    <Form.Control as="select" className="shadow"
                        onChange={this.onChangeColorOption.bind(this)}>
                        {
                            this.state.options.map((option, index) => {
                                return (<option key={index} value={index}>{option.type}</option>)
                            })
                        }
                    </Form.Control>
                </Form.Group>

                <Form.Label>Color Components</Form.Label>
                <div className="mb-3 inputColorGroup" id="inputColorGroup">
                    {
                        this.fnBindData(this.selectedOp.label)
                    }
                </div>
            </>
        );

    }

}

export default ColorController;

// const ColorController = (param) => {
//     console.log(param.rgbValue);
//     const [value, setValue] = useState(0);

    

//     const type = ['Red', 'Green', 'Blue', 'Opacity'];
// }
