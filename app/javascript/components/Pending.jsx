import React from 'react';

const Pending = ({ pending }) => {  
    const handleSubmit = (body) => {
        const url = "/todos/update";
        const token = document.querySelector('meta[name="csrf-token"]').content;
        
        fetch(url, {
          method: "PUT",
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => {
            console.log(response);
            window.location.reload(false);
          })
          .catch(() => console.log('An error occurred while adding the todo item'));
      }
  return (
    <div>
      <h4>Pending</h4>
      {pending.map((todo, i) => {
        return (
          <div className="form-check editing">
            <input className="form-check-input" disabled type="checkbox" defaultChecked={todo.completed} />
            <input type="text" className="form-control-plaintext" value={todo.title} />
          </div>
        )
      })}
    </div>
  )
}

export default Pending;