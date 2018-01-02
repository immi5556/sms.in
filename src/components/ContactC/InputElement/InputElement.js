import React from 'react';
import Aux from '../../../hoc/Auxx';


const inputElement = (props) => (
    <Aux>
        <input type={props.type} className="inputElement" placeholder={props.placeholderE}/>
    </Aux>
)

export default inputElement;