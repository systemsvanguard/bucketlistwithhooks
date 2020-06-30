// src/components/BucketApp.js  
import React, { useState, useEffect } from "react";
import ListHeader from "./ListHeader";
import Items from "./Items";
import AddItem from "./AddItem";
import uuid from "uuid";
import axios from "axios";

const BucketApp = (props) => {
  const apiURL = "https://jsonplaceholder.typicode.com/todos?_limit=25";
  const [todos, setItems] = useState([]);
  const [show, setShow] = useState(false);

  const handleChange = (id) => {
    setItems(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
    setShow(!show);
  };

  const deleteItem = (id) => {
    setItems([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addItem = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false,
    };
    setItems([...todos, newTodo]);
  };

  useEffect(() => {
    console.log("check if everything configured properly");
    axios
      .get(apiURL)
      .then((response) => setItems(response.data));
  }, []);

  return (
    <div className="appContainer">
      <ListHeader headerSpan={show} />
      <AddItem addItem={addItem} />
      <Items
        todos={todos}
        handleChange={handleChange}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default BucketApp; 