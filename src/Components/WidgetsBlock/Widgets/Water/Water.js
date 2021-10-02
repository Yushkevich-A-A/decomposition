import React from 'react';

// отрисовка болока погоды
function Water(props) {
    const { dataWater } = props;
    return (
        <div className='water'>
            <a href={dataWater.link}>
                <div className="water-image">
                    <img className="water-image-mg" src={dataWater.img} alt="" />
                </div>
                <div className="water-value">
                    {dataWater.value}
                </div>
                <div className="water-info">
                    {
                        dataWater.map( item => <p key={item.id} className="water-info-text">b{item.text}</p>)
                    }
                </div>
            </a>
        </div>
    )
}


export default Water;

