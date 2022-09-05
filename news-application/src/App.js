
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
   pageSize=6;
   apiKey="27e22a95fda345b1bc8a7f0b4d909872";
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <LoadingBar
          height={4}
        color='#f11946'
        progress={this.state.progress}
      
      /> 
        </div>
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={this.pageSize} country="in" category="general"></News>}>

          </Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={this.pageSize} country="in" category="general"></News>} >
          </Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country="in" category="business"></News>} >
          </Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"></News>} >
          </Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="health" pageSize={this.pageSize} country="in" category="health"></News>} >
          </Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="science" pageSize={this.pageSize} country="in" category="science"></News>} >
          </Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country="in" category="sports"></News>} >
          </Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="technology" pageSize={this.pageSize} country="in" category="technology"></News>} >
          </Route>

        </Routes>
      </Router>
    )
  }
}


