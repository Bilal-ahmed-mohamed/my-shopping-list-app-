import React from "react";
import { FaCartPlus , FaTrash} from 'react-icons/fa';




let ShoppingList = ({item ,shoppingList , setShoppingList , list}) => {
    
    const deleteHandler = () => {
        
        setShoppingList(shoppingList.filter(item => item.id  !== list.id))
    }
    
    const boughtHandler = () => {
        setShoppingList(shoppingList.map((item) => {
            if (item.id === list.id) {
                 return {
                     ...item , completed: !item.completed
                 }
            }else{
                return item;
            }
        }))
    }
    return <div>
       
       <div className="items">
       <li  className= {`todo-item ${list.completed ? 'completed' : ''}`} >{item}</li>
       <button className = "bought-btn"   onClick= {boughtHandler} > <FaCartPlus/>  </button>
       <button className = "delete-btn" onClick={deleteHandler}><FaTrash/>  </button>
       </div>
    </div>
}


export default ShoppingList;