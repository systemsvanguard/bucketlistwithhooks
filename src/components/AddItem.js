// src/components/AddItem.js 
import React, { useState } from "react";

const AddItem = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.addItem(inputText.title);
    setInputText({
      title: "",
    });
  };

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add an Item"
        className="inputText"
        name="title"
        value={inputText.title}
        onChange={onChange}
      />
      <input type="submit" value="Send" className="inputSubmit" />
    </form>
  );
};

export default AddItem; 