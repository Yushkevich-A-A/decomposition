import React from 'react';

// отрисовка блока популярные
function PopularItem(props) {
    const { item } = props;
    return (
        <div className='popular-item'>
            <a className='popular-item-link' href={item.link}>
                <span className='popular-item-name'>{item.name}-</span>
                <span className='popular-item-value'>{item.value}</span>
            </a>
        </div>
    )
}

export default PopularItem;

