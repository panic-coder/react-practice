import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './router';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter></AppRouter>
    </Provider>
  );
}

export default App;
