import { useState } from 'react';
import './Todo.css';
import {TTodo} from './TodoList';

type TProps = {
    title: string;
    todo: TTodo;
    id: string;
    deleteTodo: (arg: string) => void;
    userInput: string;
    setUserInput: (arg: string) => void;
    todos: TTodo[];
    setTodos: (arg: TTodo[]) => void;
};

export default function Todo(props: TProps) {
    const [status, setStatus] = useState<0 | 1>(0);
    const [editedInput, setEditedInput] = useState<string>('');

    const editTodo = (): void => {
        setStatus(1);
        setEditedInput(props.title);
    };

    const cancelEditing = (): void => {
        setStatus(0);
    };

    const saveEditing = (id: string, text: string): void => {
        let editedTodo = props.todos.map((todo: TTodo): TTodo => {
            if (todo.id === id) {
                todo.title = text;
            }
            return todo;
        });
        props.setTodos(editedTodo);
        setStatus(0);
    };

    const completedTodo = (id: string) => {
        let ct = props.todos.map((todo: TTodo): TTodo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        props.setTodos(ct);
    };
    return (
        <div>
            {status === 0 ? (
                <div className='todo-component'>
                    <div className='todo-field'>
                        <input
                            type='checkbox'
                            checked={props.todo.completed}
                            onChange={() => completedTodo(props.id)}
                            className='checkbox'
                        ></input>
                        <p>{props.title}</p>
                    </div>
                    <div className='btns'>
                        <button className='todo__button' onClick={editTodo}>
                            Edit
                        </button>
                        <button className='todo__button' onClick={() => props.deleteTodo(props.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ) : (
                ''
            )}
            {status === 1 ? (
                <div className='todo-component'>
                    <div>
                        <input
                            type='text'
                            className='input'
                            value={editedInput}
                            onChange={event => {
                                setEditedInput(event.target.value);
                            }}
                        ></input>
                    </div>
                    <div>
                        <button className='todo__button' onClick={cancelEditing}>
                            Cancel
                        </button>
                        <button className='todo__button' onClick={() => saveEditing(props.id, editedInput)}>
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}
