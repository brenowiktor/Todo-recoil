import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';

export default function TodoItem({ todo }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleComplete = () => {
    setTodoList(
      todoList.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const removeItem = () => {
    setTodoList(todoList.filter((item) => item.id !== todo.id));
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={toggleComplete} />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={removeItem}>Remover</button>
    </li>
  );
}