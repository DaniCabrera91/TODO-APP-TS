import { useState } from "react"
import { Todos } from "./components/Todos"
import { type TodoId } from "./types"

const mockTodos = [
  {
    id: '1',
    title: 'Comprar Pan',
    completed: true
  },
  {
    id: '2',
    title: 'Comprar Leche',
    completed: false
  },
  {
    id: '3',
    title: 'Comprar Huevos',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos) 
  }

  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo={handleRemove}
        todos={todos} 
      />
    </div>
  )
}

export default App
