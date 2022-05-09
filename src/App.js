import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/'>
            {/* this home page route should list all the beanies */}
            <BeaniesPage />
          </Route>
          <Route path='/beanie/:id'> 
            {/* this route should point to a particulat beanie baby by id and render that specific BeanieDetail page */}
            <BeanieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}