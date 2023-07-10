import React from 'react';

const Completed = ({ completed }) => {
  return (
    <div>
      <h4>Completed</h4>
      {completed.map((todo, i) => {
        return (
          <div class="form-check" key={i}>
            <input class="form-check-input" type="checkbox" checked={todo.completed} value="" id={`checkbox${todo.id}`} disabled />
            <label class="form-check-label" for={`checkbox${todo.id}`}>
              {todo.title}
            </label>
          </div>
        )
      })}
    </div>
  )
};

export default Completed;