import React from 'react';
import { useRef } from 'react';
import { ReactComponent as ButtonSvg } from './button2.svg';
import './Button.scss';

const Button = (props) => {


    return (
    <button {...props} className={"universalBtn " + props.clName}>
        <div style={{transform: `rotate(${props.angle}deg)`}}>
            <ButtonSvg />
        </div>
    </button>);
}

export default Button;