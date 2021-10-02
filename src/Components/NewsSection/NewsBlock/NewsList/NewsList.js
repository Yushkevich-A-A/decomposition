import React from 'react';
import News from './News/News';

// список новостей
function NewsList(props) {
    const { list } = props;

    return (
        <div className='news-list'>
            {
                list.map( item => <News key={item.id} news={item}/>)
            }
        </div>
    )
}

export default NewsList;

