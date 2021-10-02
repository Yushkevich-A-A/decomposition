import React from 'react';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

// представление даты
function DateWidget(props) {
    const { date } = props;
    return (
        <div className='category-date'>
            {
                format( date, 'dd MMMM, EEEE HH:mm', {locale: ru} )
            }
        </div>
    )
}

export default DateWidget;

