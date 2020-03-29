import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Main from './Components/Main'


class App extends React.Component {
  
  // state (
  //   state=[]
  // )
  
  
  render() {
    return (
      <div className="App">
        <Main />
        {/* <Route to='/about' component={About} /> 
        <Route to='/blogposts' component={BlogPosts}/> 
        <Route to='/projects' component={Projects} /> 
        <Route to='other' component={Other} />  */}
      </div>
    );

  }
}

export default App;
