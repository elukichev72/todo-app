import { FC, memo, useState } from 'react';
import './Todo.css';
import { TodoModel } from '../TodoList/TodoList';

type TProps = {
    title: string;
    todo: TodoModel;
    id: string;
    todos: TodoModel[];
    setTodos: (arg: TodoModel[]) => void;
};

const Todo: FC<TProps> = ({ title, todo, id, todos, setTodos }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedInput, setEditedInput] = useState('');

    const editTodo = (): void => {
        setIsEditing(true);
        setEditedInput(title);
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo: TodoModel) => todo.id !== id));
    };

    const cancelEditing = (): void => {
        setIsEditing(false);
    };

    const saveEditing = (id: string, text: string) => {
        let editedTodo = todos.map((todo: TodoModel): TodoModel => {
            if (todo.id === id) {
                todo.title = text;
            }
            return todo;
        });
        setTodos(editedTodo);
        setIsEditing(false);
    };

    const completedTodo = (id: string) => {
        let ct = todos.map((todo: TodoModel): TodoModel => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(ct);
    };
    return (
        <>
            {!isEditing ? (
                <div className='todo-component'>
                    <div className='todo-field'>
                        <input
                            type='checkbox'
                            checked={todo.completed}
                            onChange={() => completedTodo(id)}
                            className='checkbox'
                        ></input>
                        <p>{title}</p>
                    </div>
                    <div className='btns'>
                        <button className='todo__button' onClick={editTodo}>
                            Edit
                        </button>
                        <button className='todo__button' onClick={() => deleteTodo(id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ) : (
                ''
            )}
            {isEditing ? (
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
                        <button className='todo__button' onClick={() => saveEditing(id, editedInput)}>
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export default memo(Todo);
