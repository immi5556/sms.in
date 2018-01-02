import React from 'react';
import './ClientsSlide.css';

const clientSlide = (props) => (
    <div className="clientSlide">
        <img src={props.url} alt="Client Logo"/>
    </div>
)

export default clientSlide;