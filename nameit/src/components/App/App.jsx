import React from 'react';
import SearchBox from './../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css'
import ResultsContainer from './../ResultsContainer/ResultsContainer';

const name= require('@rstacruz/startup-name-generator');

class App extends React.Component{
    state={
        headertext:"Name It!",
        headerExpanded: true,
        suggestedNames:[]
    }

    handleInputChange=(inputText)=>{
        this.setState({headerExpanded: !inputText, suggestedNames:inputText ? name(inputText) : [] });

    }

    render(){
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headertext}/>
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
                
            </div>
        )
    }
}

export default App;