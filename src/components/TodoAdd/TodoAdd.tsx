import { useState, FC, memo } from 'react';
import './TodoAdd.css';
import { v4 as uuidv4 } from 'uuid';
import { TodoModel } from '../TodoList/TodoList';
import { FilterStatuses } from '../TodoList/TodoList';

type TProps = {
    todos: TodoModel[];
    setTodos: (arg: TodoModel[]) => void;
    filterStatus: FilterStatuses;
    setFilterStatus: (arg: FilterStatuses) => void;
};

const TodoAdd: FC<TProps> = ({ todos, setTodos, filterStatus, setFilterStatus }) => {
    const [userInput, setUserInput] = useState('');

    const addTodo = () => {
        const newTodo = { id: uuidv4(), title: userInput, completed: false };
        if (userInput) {
            setTodos([...todos, newTodo]);
        }
        setUserInput('');
    };

    return (
        <>
            <div className='add-todo'>
                <input
                    type='text'
                    className='input'
                    value={userInput}
                    onChange={event => {
                        setUserInput(event.target.value);
                    }}
                    placeholder='New todo...'
                ></input>
                <button className='todo__button' onClick={addTodo}>
                    Add
                </button>
            </div>
            <div className='filter'>
                <button
                    className={
                        filterStatus === FilterStatuses.All ? 'todo__button_active' : 'todo__button todo__button_width'
                    }
                    onClick={() => setFilterStatus(FilterStatuses.All)}
                >
                    All Tasks
                </button>
                <button
                    className={
                        filterStatus === FilterStatuses.Active
                            ? 'todo__button_active'
                            : 'todo__button todo__button_width'
                    }
                    onClick={() => setFilterStatus(FilterStatuses.Active)}
                >
                    Active Tasks
                </button>
                <button
                    className={
                        filterStatus === FilterStatuses.Completed
                            ? 'todo__button_active'
                            : 'todo__button todo__button_width'
                    }
                    onClick={() => setFilterStatus(FilterStatuses.Completed)}
                >
                    Completed Tasks
                </button>
            </div>
        </>
    );
};

export default memo(TodoAdd);
