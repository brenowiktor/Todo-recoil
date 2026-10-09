import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../selectors/todoSelectors';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useRecoilValue(filteredTodoListState);

  if (todos.length === 0) return <p>Nenhuma tarefa por aqui.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}