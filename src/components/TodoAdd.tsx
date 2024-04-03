import './TodoAdd.css';

type TProps = {
    addTodo: () => void;
    filterStatus: 0 | 1 | 2;
    setFilterStatus: (arg: 0 | 1 | 2) => void;
    userInput: string;
    setUserInput: (arg: string) => void;
}

export default function TodoAdd(props: TProps) {
    return (
        <div>
            <div className='add-todo'>
                <input
                    type='text'
                    className='input'
                    value={props.userInput}
                    onChange={(event) => {
                        props.setUserInput(event.target.value);
                    }}
                    placeholder='New todo...'
                ></input>
                <button className='todo__button' onClick={props.addTodo}>
                    Add
                </button>
            </div>
            <div className='filter'>
                <button
                    className={props.filterStatus === 0 ? 'todo__button_active' : 'todo__button todo__button_width'}
                    onClick={() => props.setFilterStatus(0)}
                >
                    All Tasks
                </button>
                <button
                    className={props.filterStatus === 1 ? 'todo__button_active' : 'todo__button todo__button_width'}
                    onClick={() => props.setFilterStatus(1)}
                >
                    Active Tasks
                </button>
                <button
                    className={props.filterStatus === 2 ? 'todo__button_active' : 'todo__button todo__button_width'}
                    onClick={() => props.setFilterStatus(2)}
                >
                    Completed Tasks
                </button>
            </div>
        </div>
    );
}
