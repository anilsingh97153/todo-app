import { useRef } from "react"
import PropTypes from 'prop-types';


const TodoForm = ({addTodo}) => {
  const inputRef = useRef(null);

  // pass the task/input to a method addTodo(), which is declared in parent component - TodoWrapper
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    addTodo(inputRef.current.value)
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
        placeholder='What is the task today?'
        ref={inputRef}
      />
      <button
        type="submit"
        className='todo-btn'
      >
        Add Task
      </button>
    </form>
  )
}

// Define prop-types for the TodoForm component
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired, // Ensure addTodo is a function and is required
}; 

export default TodoForm
