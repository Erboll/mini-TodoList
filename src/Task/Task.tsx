import React from 'react';
interface TextProps {
  text:string;
  onDelete:React.MouseEventHandler
}
const Task:React.FC<TextProps> = props => {
  return (
    <div>
      <div className="task">
        <div className="d-flex">
          <span>{props.text}</span>
          <button className="btn-delete" onClick={props.onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Task;