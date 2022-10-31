import './InputField.scss'

function InputField(): JSX.Element {
  return (
    <label className='new-todo'>
      <input className="new-todo__input" type="text" />
      <button className="new-todo__button">add todo</button>
    </label>
  )
}

export { InputField }