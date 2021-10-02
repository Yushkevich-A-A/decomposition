import React from 'react';
import PopularItem from './PopularItem/PopularItem';

// отрисовка блока популярные
function Popular(props) {
    const { dataPopular } = props;

    return (
        <div className='list=popular'>
            {
             dataPopular.map( item => <PopularItem key={item.id} item={item}/>)
            }
        </div>
    )
}

export default Popular;

