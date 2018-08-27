import React from 'react';

import './CounterControl.css';

const counterControl = (props) => (
    <div className="CounterControl" onClick={() => props.clicked(props.value)}>
        {props.label}
    </div>
);

export default counterControl;