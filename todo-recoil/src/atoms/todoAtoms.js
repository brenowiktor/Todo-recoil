import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState', // precisa ser único no app
  default: [],
});

export const todoFilterState = atom({
  key: 'todoFilterState',
  default: 'all', // 'all' | 'completed' | 'pending'
});