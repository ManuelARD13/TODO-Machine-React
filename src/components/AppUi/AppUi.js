import React, { useContext } from 'react';

import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TODOCTX } from '../../TodoContext/TodoContext';
import { TodoModal } from '../TodoModal/TodoModal';
import { CreateTodoForm } from '../CreateTodoForm/CreateTodoForm';



function AppUi() {

  const { 
    loading, 
    error, 
    filteredTODOs, 
    completeTODO, 
    deleteTODO,
    openModal 
  } = useContext(TODOCTX)
  
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <p>Loading...</p>}
        {error && <p>Error...</p>}
        {!loading && filteredTODOs.length === 0 && <p>No TODOs</p>}

        {filteredTODOs.map((TODO) => (
          <TodoItem
            key={TODO.text}
            text={TODO.text}
            completed={TODO.completed}
            onComplete={() => {completeTODO(TODO.text)}}
            onDelete={() => {deleteTODO(TODO.text)}}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
      { openModal && 
        <TodoModal>
          <CreateTodoForm />
        </TodoModal>
      }
    </>
  );
}

export { AppUi };
