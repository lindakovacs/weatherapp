import React from 'react';
import { Card } from 'semantic-ui-react';
import './Card.css';

const CardItem = ({ day }) => {
  const ms = day.dt * 1000;
  const dayName = new Date(ms).toLocaleDateString('en', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  });
  const imgURL = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
  
  return (
    <Card className='card'>
      <Card.Content>
        <Card.Header className='card_day'>{dayName}</Card.Header>
        <img src={imgURL} alt='weather status icon' className='weather_icon' />
        <Card.Meta>{Math.round(day.main.temp)} °F</Card.Meta>
        <Card.Meta>Low {Math.round(day.main.temp_min)} °F</Card.Meta>
        <Card.Meta>High {Math.round(day.main.temp_max)} °F</Card.Meta>
        <Card.Meta>Humidity {Math.round(day.main.humidity)} %</Card.Meta>
        <Card.Description>{day.weather[0].description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CardItem;
