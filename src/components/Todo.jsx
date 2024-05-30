import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const Todo = ({ todo, toggleComplete, deleteTodo, editingStatus }) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(todo.id)} className={`${todo.completed ? "completed" : ""}`}>{todo.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => {editingStatus(todo.id)}}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)}/>
      </div>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editingStatus: PropTypes.func.isRequired
}
export default Todo
