import React from 'react';
import SearchCategoryList from './SearchCategoryList/SearchCategoryList';
import SearchInput from './SearchInput/SearchInput';

// блок поиска в разделе поиска
function SearchBlock(props) {
    const { text, categoryList } = props;
    return (
        <div className='search-block'>
            <SearchCategoryList categoryList={categoryList}/> 
            <SearchInput />
            <div className='search-block-template'>
                Найдется все. Например: <span  className='search-block-text-template'>{text}</span>
            </div>
        </div>
    )
}

export default SearchBlock;

