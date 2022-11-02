import React, { useRef } from 'react';
import { TodoItemProps } from '../../types'

import './TodoItem.scss'

const TodoItem = ({
  setTodoList,
  sortTodo,
  todoData,
  buttonClass }: TodoItemProps) => {

  const refCheckbox = useRef<HTMLInputElement>(null);

  const { text, todoId, complited, visability } = todoData;

  const toggleComplited = (id: string) => {
    setTodoList(prev => {
      return prev.map(todo => {
        if (todo.todoId !== id) return todo;
        return {
          ...todo,
          complited: !complited
        }
      })
    })
  };

  const deleteTodo = () => {
    setTodoList(prev => prev.filter(todo => todo.todoId !== todoId))
  };

  const checkboxHandler = (id: string): void => {
    toggleComplited(id)

    let type: string = "all";
    for (let [key, val] of Object.entries(buttonClass)) {
      if (val) type = key
    }
    sortTodo(type)
  };

  const labelKeydownHandler = (e: React.KeyboardEvent) => {
    if (e.code === 'Space') {
      if (refCheckbox && refCheckbox.current) {
        toggleComplited(refCheckbox.current.id)
      }
    }
  };

  return (
    <>
      {visability && <li className='todo-item' >

        <label
          tabIndex={0}
          htmlFor={todoId}
          className="todo-item__fake-checkbox"
          onKeyDown={e => labelKeydownHandler(e)}>
        </label>
        {complited && <div className="todo-item__fake-checkbox-mark">✓</div>}

        <input
          tabIndex={-1}
          id={todoId}
          className="todo-item__checkbox"
          type="checkbox"
          checked={complited}
          onChange={() => checkboxHandler(todoId)}
          ref={refCheckbox}
        />

        <span className='todo-item__text'>{text}</span>

        <button
          className='todo-item__button'
          onClick={deleteTodo}
          onKeyDown={e => e.code === 'Space' ? deleteTodo() : null}
        >&times;</button>
      </li>}
    </>
  )
}

export { TodoItem }