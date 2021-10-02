import React from 'react';
import SearchCategory from './SearchCategory/SearchCategory';

// список категорий поиска
function SearchCategoryList(props) {
    const { list } = props;
    return (
        <div className='category-list'>
            {
                list.map( item => <SearchCategory key={item.id} categoty={item}/>)
            }
        </div>
    )
}

export default SearchCategoryList;

