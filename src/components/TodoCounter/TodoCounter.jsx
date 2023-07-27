import "../styles/TodoCounter.css"

function TodoCounter( { totalTODOs, completedTODOs }) {
  return(
    <h1>
      Has completado <span>{completedTODOs}</span> de <span>{totalTODOs}</span> TODOs
    </h1>
  )
}

export { TodoCounter }