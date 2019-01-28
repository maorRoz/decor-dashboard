import React, { Component } from 'react';
import { Button, Form }from 'semantic-ui-react';

class Subscribe extends Component {
  render(){
    return(
      <Form >
        <Form.Field>
          <label>Email:</label>
          <input placeholder='your@email.com'/>
        </Form.Field>
        <Button type='submit'>SUBMIT</Button>
      </Form>
    );
  }
}

export default Subscribe;
