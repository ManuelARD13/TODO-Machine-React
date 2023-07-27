import { useContext } from 'react';
import '../../styles/CreateTodoButton.css';
import { TODOCTX } from '../../TodoContext/TodoContext';

function CreateTodoButton() {
  const { setOpenModal } = useContext(TODOCTX)
  return (
    <button className="CreateTodoButton" onClick={() => setOpenModal(state => !state)}>+</button>
  );
}

export { CreateTodoButton };
