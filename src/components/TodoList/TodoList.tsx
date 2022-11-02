import { TodoItem } from '../TodoItem/TodoItem'

import { TodoListProps } from '../../types'
import './TodoList.scss'

function TodoList({
  setTodoList,
  sortTodo,
  todoList,
  buttonClass }: TodoListProps) {
  return (
    <ul className='todo-list'>
      {todoList.map(elem =>
        <TodoItem
          buttonClass={buttonClass}
          sortTodo={sortTodo}
          setTodoList={setTodoList}
          key={elem.todoId}
          todoData={elem}
        />)}
    </ul>
  )
}

export { TodoList }