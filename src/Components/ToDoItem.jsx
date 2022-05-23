import { React } from "react";

export default function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

//USING USESTATE INSIDE COMPONENT
/* export default function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function clickHandle(event) {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <li
      onClick={clickHandle}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.item}
    </li>
  );
} */
