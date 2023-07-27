
import { useContext } from 'react';
import { TODOCTX } from '../../TodoContext/TodoContext';
import '../../styles/TodoCounter.css';

function TodoCounter() {

  const { TODOs, completedTODOs, noTODOs } = useContext(TODOCTX)

  return (
    <h1 className="TodoCounter">
      {noTODOs ? `Felicidades, no hay tareas pendientes!`
        : `Has completado ${completedTODOs} de ${TODOs.length} TODOs`
      }
    </h1>

  );
}

export { TodoCounter };
