import React from "react";
import {FaPlusSquare , FaCartPlus} from 'react-icons/fa';



let Form = ({inputList , setInputList , shoppingList , setShoppingList , status , setStatus}) => {


    const inputListHandler  = (e) =>{
        setInputList(e.target.value)
        }
     
     const statusHandler = (e) =>{
        
     /*    console.log(e.target.value); */
        setStatus(e.target.value);
        
     }  

     const submitInputList = (e) => {
        
      e.preventDefault();
      setShoppingList([
          ...shoppingList , {item: inputList , completed: false , id: Math.random() * 10 }
      ])
       
      setInputList('');
      
     }   

    return <div className="App" >
        
        <form className="form" >
        <input value={inputList}  onChange={inputListHandler}  type="text"  />       
        <button className="add-button " onClick={submitInputList} > <FaPlusSquare/>  {/* Add */} </button>

        <div>
            <select name="typeoflists" onChange={statusHandler} className = "filter-list" >
                <option value="all">ALL</option>
                <option value="bought">bought</option>
                <option value="uncompleted">not bought</option>
            </select>
        </div>
        </form>

    </div>
}

export default Form;