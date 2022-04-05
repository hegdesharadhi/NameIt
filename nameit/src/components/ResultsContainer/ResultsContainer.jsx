import React from 'react';
import './ResultsContainer.css';
import NameCard from './../NameCard/NameCard.jsx';

const ResultsContainer =({suggestedNames})=>{
    const suggestedNamesJSX = suggestedNames.map(suggestedName=>{
        return <NameCard key={suggestedName} suggestedName={suggestedName} />

    })
    return (<div className="results-container">{suggestedNamesJSX}
    </div>)
}

export default ResultsContainer;