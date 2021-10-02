import React from 'react';
import BroadcastItem from './BroadcastItem/BroadcastItem';

// отрисовка блока эфир
function Broadcast(props) {
    const { dataBroadcast } = props;

    return (
        <div className='list-Broadcast'>
            {
             dataBroadcast.map( item => <BroadcastItem key={item.id} item={item}/>)
            }
        </div>
    )
}

export default Broadcast;