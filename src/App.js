
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<News pageSize={5} country="in" category="General" />} />
            <Route exact path="/business" element={<News pageSize={5} country="in" category="Business" />} />
            <Route exact path="/entertainment" element={<News pageSize={5} country="in" category="Entertainment" />} />
            <Route exact path="/general" element={<News pageSize={5} country="in" category="General" />} />
            <Route exact path="/health" element={<News pageSize={5} country="in" category="Health" />} />
            <Route exact path="/science" element={<News pageSize={5} country="in" category="Science" />} />
            <Route exact path="/sports" element={<News pageSize={5} country="in" category="Sports" />} />
            <Route exact path="/technology" element={<News pageSize={5} country="in" category="Technology" />} />


          </Routes>
        </Router>

      </div>
    )
  }
}

