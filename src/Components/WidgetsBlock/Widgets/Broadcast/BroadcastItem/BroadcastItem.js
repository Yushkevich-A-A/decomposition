import React from 'react';

// отрисовка темы эфир
function BroadcastItem(props) {
    const { item } = props;
    return (
        <div className='broadcast-item'>
            <a className='broadcast-item-link' href={item.link}>
                <span className='broadcast-item-name'>{item.name}-</span>
                <span className='broadcast-item-value'>{item.value}</span>
            </a>
        </div>
    )
}

export default BroadcastItem;

