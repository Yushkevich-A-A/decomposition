import React from 'react';

// предсьавление новости
function News(props) {
    const { news } = props;
    return (
        <div className='news-list'>
            <a href={news.link}>
                <img className='news-list-img' src={news.icon}/>
                <p className='news-list-text'>{news.text}</p>
            </a>
        </div>
    )
}

export default News;

