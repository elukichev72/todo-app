import './app.css'
import TodoList from './components/TodoList'

export default function App() {
    return (
    <div className='todo-app'>
        <h1>Todo List</h1>
        <TodoList />
    </div>
    );
}
