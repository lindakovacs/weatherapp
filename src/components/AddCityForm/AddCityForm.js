import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addCity, loadWeather } from '../../actions/weather';
import './AddCityForm.css';

const AddCityForm = ({ load, addCity }) => {
  return (
    <Form className='search_bar' onSubmit={load}>
      <Input>
        <Input
          type='text'
          placeholder='Search Weather by City'
          onChange={(event) => addCity(event.target.value)}
        />
        <Button
          type='submit'
          className='button'
        >
          Search
        </Button>
      </Input>
    </Form>
  );
};

export default connect(null, (dispatch) => ({
  load: () => dispatch(loadWeather()),
  addCity: (city) => dispatch(addCity(city)),
}))(AddCityForm);
