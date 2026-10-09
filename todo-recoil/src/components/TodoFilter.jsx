import { useRecoilState } from 'recoil';
import { todoFilterState } from '../atoms/todoAtoms';

export default function TodoFilter() {
  const [filter, setFilter] = useRecoilState(todoFilterState);

  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option value="all">Todas</option>
      <option value="completed">Concluídas</option>
      <option value="pending">Pendentes</option>
    </select>
  );
}