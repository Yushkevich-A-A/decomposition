import React from 'react';
import NewsBlock from './NewsBlock/NewsBlock';
import AdditionalWidget from './AdditionalWidget/AdditionalWidget';
import WidjetCorrection from '../WidjetCorrection/WidjetCorrection';

// раздел новостей
function NewsSection(props) {
    const { newsSectionData } = props;
    
    return (
        <section ClassName='news-section'>
            <NewsBlock newsData={newsSectionData.newsData}/>
            <AdditionalWidget>
                <WidjetCorrection data={newsSectionData.additionData}/>
            </AdditionalWidget>
        </section>
    )
}

export default NewsSection;

