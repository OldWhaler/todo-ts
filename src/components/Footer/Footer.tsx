import { FooterProps } from '../../types'

import './Footer.scss'

function Footer({
  setTodoList,
  setButtonClass,
  sortTodo,
  todoList,
  buttonClass }: FooterProps) {

  const deleteComplitedTodo = () => {
    setTodoList(prev => prev.filter(todo => !todo.complited))
  }

  const addActiveClass = (name: string) => {
    setButtonClass({
      all: false,
      active: false,
      completed: false,
      [name]: true
    })
  }

  return (
    <div className="footer">
      <span
        className="footer__text">
        {todoList.filter(todo => !todo.complited).length} items to do</span>

      <ul className="footer__button-list">
        <li>
          <button
            name="all"
            className={`footer__button ${buttonClass["all"] ? "button-active" : ''} `}
            onClick={(e) => {
              sortTodo("all")
              addActiveClass(e.currentTarget.name)
            }}>
            All</button>
        </li>
        <li>
          <button
            name="active"
            className={`footer__button ${buttonClass["active"] ? "button-active" : ''} `}
            onClick={(e) => {
              sortTodo("active")
              addActiveClass(e.currentTarget.name)
            }}>
            Active</button>
        </li>
        <li>
          <button
            name="completed"
            className={`footer__button ${buttonClass["completed"] ? "button-active" : ''} `}
            onClick={(e) => {
              sortTodo("completed")
              addActiveClass(e.currentTarget.name)
            }}>
            Completed</button>
        </li>
      </ul>

      <button
        className="footer__button"
        onClick={deleteComplitedTodo}>
        Clear completed</button>
    </div >
  )
}

export { Footer }