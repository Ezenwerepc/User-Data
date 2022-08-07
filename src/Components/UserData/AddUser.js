import React, {useState} from 'react';
import './AddUser.css';
import Card from '../UserData/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredUserage, setEnteredUserage] = useState('')
  const [error, setError] = useState()


  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0 ||enteredUserage.trim().length===0 ){
      setError({
        title:'Invaslid input.',
        message:'Please enter a valid name and age (non-empty values.'
      })
      return;
    }
    if(+enteredUserage<18){
      setError({title:'Invaslid age.',
      message:'Please enter a valid age(>18).'
    })
        return;
    }
    props.onAddUser(enteredUsername, enteredUserage);
    setEnteredUsername('');
    setEnteredUserage('');
  };
  
const userNameChangeHandler = (event)=>{
  setEnteredUsername(event.target.value);
};
const userAgeChangeHandler = (event) =>{
  setEnteredUserage(event.target.value);
};
const errorHandler = () => {
  setError(null);
}

  return (<div>
    {error&&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
<Card className='input'>
      <form onSubmit={addUserHandler}>
      <label htmlFor='userName'>Username</label>
      <input id='userName' type='text' onChange={userNameChangeHandler} value={enteredUsername}/>
      <label htmlFor='age'>Age(Years)</label>
      <input id='age' type='number' onChange={userAgeChangeHandler} value={enteredUserage}/>
      <Button type='submit'>Add User</Button>
      </form> 
      </Card>
      </div>
  )
};


export default AddUser;