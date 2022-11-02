interface TodoItemInterface {
  text: string
  todoId: string
  complited: boolean
  visability: boolean
}

interface ButtonClassInterface {
  all: boolean,
  active: boolean,
  completed: boolean
}

interface SortTypesInterface {
  [key: string]: () => any
}

interface TodoListProps {
  buttonClass: ButtonClassInterface
  sortTodo: (type: string) => void
  todoList: TodoItemInterface[]
  setTodoList: React.Dispatch<React.SetStateAction<TodoItemInterface[]>>
}

interface TodoItemProps {
  buttonClass: ButtonClassInterface
  sortTodo: (type: string) => void
  todoData: TodoItemInterface
  setTodoList: React.Dispatch<React.SetStateAction<TodoItemInterface[]>>
}

interface FooterProps {
  sortTodo: (type: string) => void
  buttonClass: ButtonClassInterface
  setButtonClass: React.Dispatch<React.SetStateAction<ButtonClassInterface>>
  todoList: TodoItemInterface[]
  setTodoList: React.Dispatch<React.SetStateAction<TodoItemInterface[]>>
}

interface InputFieldProps {
  buttonClass: ButtonClassInterface
  sortTodo: (type: string) => void
  setTodoList: React.Dispatch<React.SetStateAction<TodoItemInterface[]>>
}

export type {
  TodoItemInterface,
  TodoListProps,
  TodoItemProps,
  InputFieldProps,
  FooterProps,
  ButtonClassInterface,
  SortTypesInterface
}