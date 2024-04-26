import { useState, useEffect, memo, FC } from 'react';
import Todo from '../Todo/Todo';
import TodoCounter from '../TodoCounter/TodoCounter';
import TodoAdd from '../TodoAdd/TodoAdd';

export type TodoModel = {
    id: string;
    title: string;
    completed: boolean;
};

export enum FilterStatuses {
    All = 0,
    Active = 1,
    Completed = 2,
}

const TodoList: FC = () => {
    const [filterStatus, setFilterStatus] = useState<FilterStatuses>(FilterStatuses.All);
    const [todos, setTodos] = useState<TodoModel[]>(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <>
            <TodoAdd todos={todos} setTodos={setTodos} filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
            <TodoCounter todos={todos} />
            {todos
                .filter((todo: TodoModel) => {
                    if (filterStatus === 2) {
                        return todo.completed === true;
                    } else if (filterStatus === 1) {
                        return todo.completed === false;
                    } else return todo;
                })
                .map((todo: TodoModel) => {
                    return (
                        <Todo
                            key={todo.id}
                            title={todo.title}
                            todo={todo}
                            id={todo.id}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    );
                })}
        </>
    );
};

export default memo(TodoList);
