import React, { Component } from 'react';
import { Button, Form }from 'semantic-ui-react';
import { submitEmailForUpdates } from '../../API';

class Subscribe extends Component {
  constructor(props){
    super(props);
    this.state = { email: '' };
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = async (event) => {
    const { onSubmit } = this.props;
    const { email } = this.state;
    onSubmit(email);
    event.preventDefault();
  };

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input label='Email' placeholder='your@email.com' onChange={this.handleChange} />
        <Button type='submit'>SEND</Button>
      </Form>
    );
  }
}

export default Subscribe;
