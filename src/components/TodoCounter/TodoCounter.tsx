import { FC, memo } from 'react';
import { TodoModel } from '../TodoList/TodoList';
import styled from 'styled-components';

const STodoCounter = styled.div`
    font-family: Hero;
    font-size: 32px;
    font-weight: bold;
    padding: 20px 0px;
    text-align: center;
`;

type TProps = {
    todos: TodoModel[];
};

const TodoCounter: FC<TProps> = ({ todos }) => {
    return <STodoCounter>{todos.length} tasks remaining</STodoCounter>;
}

export default memo(TodoCounter)
