import React from 'react';
import Aux from '../../../hoc/Auxx';

const textAreaElement = (props) =>(
    <Aux>
        <textarea style={props.Theight} className="textAreaElement" placeholder={props.placeholderE}></textarea>
    </Aux>
)

export default textAreaElement;