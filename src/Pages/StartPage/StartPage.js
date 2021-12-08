import React from 'react';
import NewsSection from '../../Components/NewsSection/NewsSection';
import SearchSection from '../../Components/SearchSection/SearchSection';
import AddBlock from '../../Components/AddBlock/AddBlock';
import WidgetsBlock from '../../Components/WidgetsBlock/WidgetsBlock';


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


