import React from 'react';
import NewsSection from '../../Components/NewsSection/NewsSection';


// Каркас страницы
function StartPage(props) {
    return (
        <div ClassName='start-page'>
            <NewsSection newsSectionData={props.newsSectionData}/>
            <SearchSection searchData={props.searchData}/>
            <AddBlock addhData={props.addData}/>
            <WidgetsBlock widgetData={props.widgetData}/>
        </div>
    )
}

export default StartPage;


