import React, { useState, useRef } from 'react';
import { TodoItemProps } from '../../types'

import './TodoItem.scss'

const TodoItem = ({
  setTodoList,
  sortTodo,
  todoData,
  buttonClass }: TodoItemProps) => {


  const refCheckbox = useRef<HTMLInputElement>(null);
  const { text, todoId, complited, visability } = todoData;
  const [inputValue, setInputValue] = useState(text);

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

  const inputBlurHandler = (inputText: string, id: string) => {
    const newTodoText = inputText.trim();

    if (newTodoText.length === 0) {
      setTodoList(prev => prev.filter(todo => todo.todoId !== id))
      return
    }

    setInputValue(newTodoText)

    setTodoList(prev => prev.map(todo => {
      if (todo.todoId === id) {
        todo.text = newTodoText
      }
      return todo
    }))
  }


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

        <input className='todo-item__text'
          value={inputValue}
          onBlur={e => inputBlurHandler(e.target.value, todoId)}
          onChange={e => setInputValue(e.target.value)}
        />

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