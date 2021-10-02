import React from 'react';

// отображение категории
function Category(props) {
    const { category } = props;
    return (
        <div className='category'>
            <a href={category.link} className='category-link'>
                {category.text}
            </a>
        </div>
    )
}

export default Category;

