import GlobalStyles from './assets/styles/global.styles';
import { SApp, STitle } from './assets/styles/app.styles';
import TodoList from './components/TodoList/TodoList';

export default function App() {
    return (
        <>
            <GlobalStyles />
            <SApp>
                <STitle>Todo List</STitle>
                <TodoList />
            </SApp>
        </>
    );
}
