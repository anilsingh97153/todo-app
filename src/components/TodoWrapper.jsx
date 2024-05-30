import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([
    { id: 0, task: "This is a dummy task.", completed: false, isEditing: false },
  ])
  const [index, setIndex] = useState(1)

  // receives the todo from Todo form and updates in todos list
  const addTodo = (todo) => {
    setTodos([...todos, { id: index, task: todo, completed: false, isEditing: false }])
    console.log(todos);
    setIndex(index + 1)
  }
  // change if the user click on a todo, then from that todo component, this method will be called, as we have passed this in prop to that component.
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )))
  }

  // delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => (todo.id!==id)))
  }

  // change a todo's edit status
  const editingStatus = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }
  // edit the todo
  const editTodo = (updatedTodo, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task: updatedTodo, isEditing: !todo.isEditing } : todo))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm key={index} editTodo={editTodo} todo={todo}/>
        ) : (
        <Todo todo={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editingStatus={editingStatus}/>)
      ))}

    </div>
  )
}

export default TodoWrapper;
