import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import Hello from './components/HelloWorld';

class App extends React.Component{
    render(){
        return(
            <Hello />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

