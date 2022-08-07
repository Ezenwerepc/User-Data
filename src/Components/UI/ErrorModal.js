import React from 'react';
import Button from './Button';
import './ErrorModal.css';
import Card from '../UserData/Card';
const ErrorModal = (props) => {
 return (
  <div>
  <div className='backdrop' onClick={props.onConfirm}/>
  <Card className='modal'>
 <header className='header'>
<h2>{props.title}</h2>
 </header>
 <div className='content'>
  <p>{props.message}</p>
 </div>
 <footer>
<Button className='actions'onClick={props.onConfirm}> Okay</Button>
 </footer>;
 </Card>
 </div>
)};

export default ErrorModal;