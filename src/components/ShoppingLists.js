import React from "react";
import ShoppingList from './ShoppingList';



let ShoppingLists = ({shoppingList , setShoppingList , filteredList}) => {

   

    return  <div>

       <div className="shopping-container">
       <ul className="shopping-list" >
        
       {filteredList.map(list => (
           <ShoppingList shoppingList = {shoppingList}  setShoppingList = {setShoppingList} list = {list} item={list.item} key = {list.id} />
       ))}
       
       </ul>
       </div>
    </div>
}

export default ShoppingLists;