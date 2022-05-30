import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import './App.css';
import ShoppingLists from './components/ShoppingLists';

function App() {

    
   const [inputList , setInputList] = useState('');
   const [shoppingList , setShoppingList] = useState([]);
   const [status , setStatus] = useState('all');
   const [filteredList , setFilteredList] = useState([]);


   useEffect(() => {
     filterHandler();
   }, [shoppingList , status]);


   const filterHandler = () => {

    switch (status) {
      case 'bought':
        setFilteredList(shoppingList.filter(list => list.completed === true));        
        break;
      case 'notbought':
        setFilteredList(shoppingList.filter(list => list.completed === false));  
        break;
      default:
        setFilteredList(shoppingList);
        break;
    }
   };
   
  return (
    <div>

      <header>
        <h1>my shopping list App</h1>
      </header>
      <Form status = {status}   setStatus = {setStatus} inputList = {inputList} setInputList = {setInputList} shoppingList = {shoppingList} setShoppingList = {setShoppingList} />
      <ShoppingLists  filteredList = {filteredList}  shoppingList = {shoppingList}  setShoppingList = {setShoppingList}  />
     
    </div>
  );
}

export default App;
