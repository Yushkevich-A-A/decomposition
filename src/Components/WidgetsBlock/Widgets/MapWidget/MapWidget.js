import React from 'react';

// Блок карты
function MapWidget(props) {
    const { mapData } = props;
    return (
        <div className='map-widget'>
            <a className='map-widget-link' href={mapData.link}>
                Расписание
            </a>
        </div>
    )
}

export default MapWidget;

