import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';

import './bootstrap.min.css';
import './index.css';

import App from './App';

class Title extends React.Component{
  componentDidMount(){
    document.title = "researchq"
  }
  render(){
    return (
      <Root>
        <App />
      </Root>
    )
  }
}

ReactDOM.render(
  <Title />,
  document.getElementById('root')
);
