import React from 'react';

// единичный курс из списка
function Rate(props) {
    const { data } = props;
    return (
        <div className='rate'>
            <div className='rate-name'>{data.name}</div>
            <div className='rate-current-value'>{data.value}</div>
            <div className='rate-increase'>{data.increase}</div>
        </div>
    )
}

export default Rate;

