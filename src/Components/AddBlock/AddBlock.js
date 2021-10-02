import React from 'react';

// Блок рекламы
function AddBlock(props) {
    const { add } = props;
    return (
        <div className='add-block'>
            <a href={add.link}>
                <img src={add.img} alt="" />
            </a>
        </div>
    )
}

export default AddBlock;
