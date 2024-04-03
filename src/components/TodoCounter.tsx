import './TodoCounter.css';
import {TTodo} from './TodoList';

type TProps = {
    todos: TTodo[];
}

export default function TodoCounter(props: TProps) {
    return <div>
        <p className='counter'>{props.todos.length} tasks remaining</p>
    </div>;
}
