import React from 'react';
import TVItem from './TVItem/TVItem';

// блок телепрограмма
function TV(props) {
    const { dataTV } = props;
    return (
        <div className='tv-list'>
            {
                dataTV.map( item => <TVItem key={item.id} item={item}/>)
            }
        </div>
    )
}

export default TV;

