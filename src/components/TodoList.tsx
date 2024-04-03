import { useState, useEffect } from 'react';
import Todo from './Todo';
import TodoCounter from './TodoCounter';
import TodoAdd from './TodoAdd';
import { v4 as uuidv4 } from 'uuid';

export type TTodo = {
    id: string;
    title: string;
    completed: boolean;
};

export default function TodoList() {
    const [todos, setTodos] = useState<TTodo[]>(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });
    const [userInput, setUserInput] = useState<string>('');
    const [filterStatus, setFilterStatus] = useState<0 | 1 | 2>(0);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const todo = { id: uuidv4(), title: userInput, completed: false };

    const addTodo = () => {
        if (userInput) {
            setTodos([...todos, todo]);
        }
        setUserInput('');
    };

    const deleteTodo = (id: string) => {
        setTodos(todos => todos.filter((todo: TTodo) => todo.id !== id));
    };

    return (
        <div>
            <TodoAdd
                addTodo={addTodo}
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
                userInput={userInput}
                setUserInput={setUserInput}
            />
            <TodoCounter todos={todos} />
            {todos
                .filter((todo: TTodo) => {
                    if (filterStatus === 2) {
                        return todo.completed === true;
                    } else if (filterStatus === 1) {
                        return todo.completed === false;
                    } else return todo;
                })
                .map((todo: TTodo) => {
                    return (
                        <Todo
                            title={todo.title}
                            todo={todo}
                            id={todo.id}
                            deleteTodo={deleteTodo}
                            userInput={userInput}
                            setUserInput={setUserInput}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    );
                })}
        </div>
    );
}
