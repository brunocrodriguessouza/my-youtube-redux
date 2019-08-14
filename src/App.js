import React from 'react';
import { Provider } from 'react-redux'

import './App.css';
import store from './store'

import SearchBar from './componentes/SearchBar';
import VideoList from './componentes/VideoList';
import VideoPlayer from './componentes/VideoPlayer';

const App = props => {
  return (
    <Provider store={store}>
      <div className='container'>
        <SearchBar />
        <VideoList />
        <VideoPlayer />
      </div>
  </Provider>
  )
}

export default App;


