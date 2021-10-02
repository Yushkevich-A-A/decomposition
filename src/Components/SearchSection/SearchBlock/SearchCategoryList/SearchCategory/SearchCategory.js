import React from 'react';

// категории поиска
function SearchCategory(props) {
    const { category } = props;

    return (
        <div className='search-category'>
            <a href={category.link}>
                {category.name}
            </a>
        </div>
    )
}

export default SearchCategory;

