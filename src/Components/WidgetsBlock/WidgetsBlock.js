import React from 'react';
import Widget from './Widget/Widget';
import MapWidget from './Widgets/MapWidget/MapWidget';
import Water from './Widgets/Water/Water';
import Popular from './Widgets/Popular/Popular';
import Broadcast from './Widgets/Broadcast/Broadcast';
import TV from './Widgets/TV/TV';

// Список виджетов
function WidgetsBlock(props) {
    const { data } = props;
    return (
        <div className='widgets-list'>
            <Widget title='Погода'>
                <Water dataWater={data.dataWater}/>
            </Widget>
            <Widget title='Посещаемое'>
                <Popular dataPopular={data.dataPopular}/>
            </Widget>
            <Widget title='Карта Германии'>
                <MapWidget dataMap={data.dataMap}/>
            </Widget>
            <Widget title='Телепрограмма'>
                <TV dataTV={data.dataTV}/>
            </Widget>
            <Widget title='Эфир'>
                <Broadcast dataBroadcast/>
            </Widget>
        </div>
    )
}

export default WidgetsBlock;

