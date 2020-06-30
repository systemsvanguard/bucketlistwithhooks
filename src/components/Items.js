// src/components/Items.js 
import React from "react";
import BucketItem from "./BucketItem";

const Items = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <BucketItem
          key={todo.id}
          todo={todo}
          handleChange={props.handleChange}
          deleteItem={props.deleteItem}
        />
      ))}
    </div>
  );
};

export default Items; 