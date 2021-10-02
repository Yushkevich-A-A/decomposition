import React from 'react';
import NewsCategory from './NewsCategory/NewsCategory';
import NewsList from './NewsList/NewsList';
import CurrencyRate from './CurrencyRate/CurrencyRate';

// блок новостей в разделе новостей
function NewsBlock(props) {
    const { newsData } = props;

    return (
        <div className='news-block'>
            <NewsCategory categoryList={newsData.categoryList}/>
            <NewsList list={newsData.newsList}/>
            <CurrencyRate rateList={newsData.currencyRate.rateList} link={newsData.currencyRate.link} />
        </div>
    )
}

export default NewsBlock;

