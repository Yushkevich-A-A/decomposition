import React from 'react';
import Category from './Category/Category';

// отображение категори новостей
function NewsCategory(props) {
    const { categoryList } = props;
    return (
        <div className='category-list'>
            {
                categoryList.map( item => <Category key={item.id} category={item} />)
            }
            <DateWidget date={new Date()}/>
        </div>
    )
}

export default NewsCategory;

