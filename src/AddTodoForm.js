import React from 'react'

function AddTodoForm({
    // passing the todo as a prop
    todo,
    // notice the name change of the function handleAddFormSubmit to onAddFormSubmit
    onAddFormSubmit,
    // notice the name change of the function handleAddInputChange to onAddInputChange
    onAddInputChange
  }) {
  return (
            // make sure to add the handleFormSubmit function in the "onSubmit" prop
            // notice the change for the function names in the onSubmit and onChange props
            <form onSubmit={onAddFormSubmit}>
            {/* we've added an h2 element */}
            <h2>Add Todo</h2>
            {/* also added a label for the input */}
            <label htmlFor="todo">Add todo: </label>
            {/* notice that the value is still set to the todo state */}
            {/* also notice the handleInputChange is still the same */}
            <input
              name="todo"
              type="text"
              placeholder="Create a new todo"
              value={todo}
              onChange={onAddInputChange}
            />
            {/* here we just added a "Add" button element - use the type="submit" on the button which will still submit the form when clicked using the handleFormSubmit function */}
            <button type="submit">Add</button>
          </form>
  )
}

export default AddTodoForm