import React, { Component } from 'react';
import { Button, Form }from 'semantic-ui-react';
import './subscribe.css';

const SubscribeForm = ({ handleSubmit, handleChange, error }) => (
  <div className='subscribe'>
    <Form onSubmit={handleSubmit}>
      <Form.Input className={error ? 'shaker' : ''}
      label='Email' error={error} placeholder='your@email.com' onChange={handleChange} />
      <div className='submit'>
        <Button primary type='submit'>SEND</Button>
      </div>
    </Form>
  </div>
);

const Subscribed = () => {
  const email = localStorage.getItem('email');
  return (
    <div>Thanks for signing up! you'll get your updates for the following address: {email}</div>
  );
};

class Subscribe extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', error: false, showForm : !localStorage.getItem('email') };
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = async (event) => {
    const { onSubmit } = this.props;
    const { email } = this.state;
    if(email.length > 0){
      onSubmit(email);
      localStorage.setItem('email', email);
      this.setState({ showForm: false, error: false });
    } else {
      this.setState({ error: true });
    }
    event.preventDefault();
  };

  render(){
    const { showForm, error } = this.state;
    return showForm
      ? <SubscribeForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} error={error} />
      : <Subscribed/>;
  }
}

export default Subscribe;
