import React from 'react';

// главная картинка страницы
function MainImage(props) {
    const { img } = props;
    
    return (
        <div className='main-img'>
            <img src={img} alt="" />
        </div>
    )
}

export default MainImage;

