import React from 'react';

// общая стилизация widget
function Widget(props) {
    return (
        <div className='widget'>
            <h3 className='widget-title'>
                {props.title}
            </h3>
            <div className='widget-data'>
               {props.children} 
            </div>
        </div>
    )
}

export default Widget;

