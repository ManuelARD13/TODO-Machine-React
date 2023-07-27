import '../../styles/TodoItem.css';

import { BsCheck2Circle } from "react-icons/bs"
import { BsXCircle } from "react-icons/bs"


function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <BsCheck2Circle className='Icon-Svg' fill={`${props.completed ? "green" : "gray"}`}/>
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <BsXCircle className='Icon-Svg'/>
      </span>
    </li>
  );
}

export { TodoItem };