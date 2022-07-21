import { useState } from 'react';

export default () => {
  const [todos, setTodos] = useState(['foo', 'bar']);
  return {
    todos,
    setTodos,
  };
};
