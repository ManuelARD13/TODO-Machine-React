function TodoItem({ text, completed }) {
  return(
    <li>
      <span>V</span>
      <p>{text} {completed}</p>
      <span>X</span>
    </li>
  )
}

export { TodoItem }