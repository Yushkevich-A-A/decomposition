import React, {useState} from 'react';

// стилизация поля ввода запроса поискового и кнопки поиск
function SearchInput() {
    const [value, setValue] = useState('');
    return (
        <div className='search-input'>
            <input type="text" className='input-field' value={value} 
             onChange={ event => setValue(event.target.value) }/>
            <button className='input-button'>Найти</button>
        </div>
    )
}

export default SearchInput;

