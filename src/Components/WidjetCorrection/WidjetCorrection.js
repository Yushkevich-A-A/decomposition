import React from 'react';

// дополнительный блок в разделе новости
function WidjetCorrection(props) {
    const { data } = props;
    return (
        <div className='working-on-bugs'>
            <a className='working-on-bug-link' href={data.link}>
                <img className='working-on-bugs-img' src={data.img} alt="" />
                <h2 className='working-on-bugs-h2'>{data.title}</h2>
                <p className='working-on-bugs-text'>{data.text}</p>
            </a>
        </div>
    )
}

export default WidjetCorrection;

