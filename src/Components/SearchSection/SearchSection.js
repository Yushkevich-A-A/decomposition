import React from 'react';
import MainImage from './MainImage/MainImage';
import SearchBlock from './SearchBlock/SearchBlock';


// раздел поиска
function SearchSection(props) {
    const { text, mainImg, categoryList } = props;

    return (
        <section className='search-section'>
            <MainImage img={mainImg}/>
            <SearchBlock text={text} categoryList={categoryList}/>
        </section>
    )
}

export default SearchSection;

