import React from 'react';
import './Validation.css';

class ValidationSample extends React.Component {
  //상태 객체
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
}
