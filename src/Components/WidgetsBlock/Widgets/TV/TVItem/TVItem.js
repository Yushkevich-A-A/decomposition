import React from 'react'

// тв программа
function TVItem(props) {
    const { item } = props;
    return (
        <div className='tv-item'>
            <a href={item.link}>
                <span className='tv-item-date'>{item.date}</span>
                <span className='tv-item-name'>{item.name}</span>
                <span className='tv-item-info'>{item.info}</span>
            </a>
        </div>
    )
}

export default TVItem

