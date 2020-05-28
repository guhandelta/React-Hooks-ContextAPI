import React from 'react';
import BookContextProvider from './contexts/BookContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Dashboard, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <BookContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    </BookContextProvider>
  );
};

export default App;
