import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import './App.css';
import Dashboard from './Containers/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Route path ='/' exact component={Dashboard} />
      </div>
    </Router>

  );
}

export default App;
