import React, { useState, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";


const Show = () => {

  const params = useParams();
  
  const navigate = useNavigate();
  const [todo, setTodo] = useState([]);
 
  
  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setTodo([response]))
      .catch(() => navigate("/"));
  }, [params.id]);

  if (todo.length === 0) {
    return <h1>Loading...</h1>;
  }

  console.log(todo, "recipes");
  return (
    <>
     {
      todo.map((item)=>
      <>
       <h1>{item.title}</h1>
       <h1>{item.discription}</h1>
      </>
      )
     }
    </>
  )
}

export default Show;