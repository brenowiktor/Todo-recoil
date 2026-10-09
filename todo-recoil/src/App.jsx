import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
}