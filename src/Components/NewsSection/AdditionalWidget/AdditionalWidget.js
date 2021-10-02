import React from 'react';

function AdditionalWidget(props) {
    return (
        <div className='additional-widget'>
            {props.children}
        </div>
    )
}

export default AdditionalWidget;

