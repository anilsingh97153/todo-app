import { useRef } from "react"
import PropTypes from 'prop-types';


const EditTodoForm = ({editTodo, todo}) => {
  const inputRef = useRef(todo);

  // pass the task/input to a method addTodo(), which is declared in parent component - TodoWrapper
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(inputRef.current.value, todo.id)
    inputRef.current.value = ""; 
  }
  return (
    // form to take input task from user
    <form
      className="TodoForm"
      onSubmit={handleSubmit} 
    >
      <input
        type="text"
        name=""
        id=""
        className='todo-input'
        placeholder='Update the task'
        ref={inputRef}
        defaultValue={todo.task}
      />
      <button
        type="submit"
        className='todo-btn'
      >
        Update Task
      </button>
    </form>
  )
}

// Define prop-types for the TodoForm component
EditTodoForm.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        task: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        isEditing: PropTypes.bool.isRequired}),
  editTodo: PropTypes.func.isRequired, // Ensure addTodo is a function and is required
}; 

export default EditTodoForm