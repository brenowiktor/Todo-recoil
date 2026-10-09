import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';

export default function TodoForm() {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setTodoList([
      ...todoList,
      { id: Date.now(), text: text.trim(), completed: false },
    ]);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}