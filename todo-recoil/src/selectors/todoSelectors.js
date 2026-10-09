import { selector } from 'recoil';
import { todoListState, todoFilterState } from '../atoms/todoAtoms';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'completed':
        return list.filter((todo) => todo.completed);
      case 'pending':
        return list.filter((todo) => !todo.completed);
      default:
        return list;
    }
  },
});