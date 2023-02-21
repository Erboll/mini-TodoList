import React from 'react';

interface FormProps {
  onSubmit:React.FormEventHandler;
  onChange:React.ChangeEventHandler

}

const AddTaskForm:React.FC<FormProps> = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input className='input' type="text" placeholder="Add new task" onChange={props.onChange}/>
        <button type={"submit"} className="btn">Add</button>
      </form>
    </div>
  );
};

export default AddTaskForm;