import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadWeather } from '../../actions/weather';
import { Message, Loader } from 'semantic-ui-react';
import CardItem from '../Card/Card';
import './CityWeather.css';

const CityWeather = ({ weather, forecast, error, load }) => {
  useEffect(() => {
    load();
  }, [load]);

  if (error) {
    return (
      <Message negative>
        <Message.Header>{error}</Message.Header>
      </Message>
    );
  } else if (weather && forecast) {
    const forecastCard = () => {
      return forecast.map((day, id) => <CardItem day={day} key={id} />);
    };

    return (
      <div>
        <h1 className='city-name'> City: {weather.name}</h1>
        <div className='weather'>
          <CardItem day={weather} />
        </div>
        <div className='forecast'>{forecastCard()}</div>
      </div>
    );
  } else {
    return <Loader className='claim_loader' active inline='centered' />;
  }
};

export default connect(
  (state) => ({
    weather: state.weather,
    error: state.hasError,
    forecast: state.forecast,
  }),
  (dispatch) => ({
    load: (city) => dispatch(loadWeather(city)),
  })
)(CityWeather);
