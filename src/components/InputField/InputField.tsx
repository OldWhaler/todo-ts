import React, { useState, useRef } from 'react';

import { InputFieldProps } from '../../types';

import './InputField.scss';

function InputField({
  setTodoList,
  sortTodo,
  buttonClass }: InputFieldProps) {

  const [inputValue, setInputValue] = useState('');
  const refInput = useRef<HTMLInputElement>(null);

  const addTodo = (): void => {
    if (refInput && refInput.current) {
      const newTodoText = refInput.current.value.trim();

      if (newTodoText.length) {
        setTodoList((prev) => {
          return [...prev, {
            text: newTodoText,
            todoId: new Date().toISOString(),
            complited: false,
            visability: true
          }]
        })
      }
      setInputValue('')

      let type: string = "all";
      for (let [key, val] of Object.entries(buttonClass)) {
        if (val) type = key
      }
      sortTodo(type)
    }
  };


  return (
    <label className='new-todo'>

      <input
        className="new-todo__input"
        type="text"
        ref={refInput}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' ? addTodo() : null}
        value={inputValue}
      />

      <button
        className="new-todo__button"
        onClick={addTodo}>
        add todo</button>

    </label>
  )
}

export { InputField }