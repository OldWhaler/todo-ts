import { useState, useEffect } from 'react';

import { InputField } from './components/InputField/InputField';
import { TodoList } from './components/TodoList/TodoList';
import { Footer } from './components/Footer/Footer';

import { TodoItemInterface, ButtonClassInterface, SortTypesInterface } from './types';
import './App.scss';

function App() {
  let todoData: TodoItemInterface[];

  if (localStorage.getItem('data') !== null) {
    todoData = JSON.parse(localStorage.getItem('data') as string);
  } else {
    todoData = []
  }

  const [todoList, setTodoList] = useState<TodoItemInterface[]>(() => todoData);

  const [buttonClass, setButtonClass] = useState<ButtonClassInterface>(
    {
      all: true,
      active: false,
      completed: false
    }
  );

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(todoList))
  }, [todoList])



  function sortTodo(type: string) {
    const sortTypes: SortTypesInterface = {
      all: () => {
        setTodoList(prev => {
          return prev.map(todo => {
            todo.visability = true;
            return todo
          })
        })
      },
      active: () => {
        setTodoList(prev => {
          return prev.map(todo => {
            todo.visability = !todo.complited
            return todo
          })
        })
      },
      completed: () => {
        setTodoList(prev => {
          return prev.map(todo => {
            todo.visability = todo.complited
            return todo
          })
        })
      }
    }
    sortTypes[type]()
  }

  return (
    <div className="App">
      <InputField
        buttonClass={buttonClass}
        sortTodo={sortTodo}
        setTodoList={setTodoList} />
      <TodoList
        buttonClass={buttonClass}
        todoList={todoList}
        setTodoList={setTodoList}
        sortTodo={sortTodo}
      />
      <Footer
        sortTodo={sortTodo}
        buttonClass={buttonClass}
        setButtonClass={setButtonClass}
        todoList={todoList}
        setTodoList={setTodoList} />
    </div>
  );
}

export default App;
