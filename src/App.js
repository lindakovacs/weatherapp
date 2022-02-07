import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers/weather';
import thunk from 'redux-thunk';
import './App.css';
import CityWeather from './components/CityWeather/CityWeather';
import AddCityForm from './components/AddCityForm/AddCityForm';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className='wrapper'>
        <div className='heading'>Weather App</div>
        <AddCityForm />
        <CityWeather />
      </div>
    </Provider>
  );
}

export default App;