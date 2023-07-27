import { useContext } from 'react';
import { TODOCTX } from '../../TodoContext/TodoContext';
import '../../styles/TodoSearch.css';

function TodoSearch() {

  const { searchValue, setSearchValue } = useContext(TODOCTX)
  

  return (
    <input
      placeholder="Search TODOs"
      value={searchValue}
      className="TodoSearch"
      onChange={(e) => {
        setSearchValue(e.target.value)
      }}
    />
  );
}

export { TodoSearch };
