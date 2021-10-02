import React from 'react';

// представление списка курса валют
function CurrencyRate(props) {
    const { rateList, link } = props;

    return (
        <div className='currancy-rate'>
            {
                rateList.map( item => <Rate data={item}/>)
            }
            <div className='all-rates'>
                <a href={link}>...</a>
            </div>
        </div>
    )
}

export default CurrencyRate;

