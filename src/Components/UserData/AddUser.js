import React from 'react';
import './AddUser.css';
import Card from '../UserData/Card';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
};

  return (
<Card className='input'>
      <form onSubmit={addUserHandler}>
      <label htmlFor='userName'>Username</label>
      <input id='userName' type='text'/>
      <label htmlFor='age'>Age(Years)</label>
      <input id='age' type='number'/>
      <button type='submit'>Add User</button>
      </form> 
      </Card>
  )
}


export default AddUser;