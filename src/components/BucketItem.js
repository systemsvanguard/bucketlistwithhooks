// src/components/BucketItem.js 
import React, { useEffect } from "react";
import Swal from 'sweetalert2';

const BucketItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#4682b4",
    textDecoration: "line-through",
  };

  const { completed, id, title } = props.todo;

  useEffect(() => {
    return () => {
      // alert("Warning. About to remove list item.");
	  /* Use Sweet Alert 2 library here */
	  Swal.fire('Delete Item', 'You are about to remove a List Item', 'warning');
	  /* Track down this error! Sweet Alert sporadically affects the NavBar whenever React Router is first triggered. */
    };
  }, []);

  return (
    <li className="listItem">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChange(id)}
      />
	  <button className="button is-small is-danger is-outlined buttonStyle" onClick={() => props.deleteItem(id)}>    
		<span className="icon is-small"><i className="fas fa-times"></i></span>
		<span className="has-text-weight-bold">Delete</span>
	  </button> 
	  
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  );
};

export default BucketItem; 