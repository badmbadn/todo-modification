import React, { Component } from "react";
import View from "../View/View";
import './TaskList.css';
import PropTypes from 'prop-types'

export default class TaskList extends Component  {
  
  render() {
    const {dataTasks,onDeleted,onToggle,onToggleEditing,onFormatLabel} = this.props
      
    const itemTasks = dataTasks.map(({id,done,descr,editing,created}) => {
      let className='';
      if(done) {
        className = 'completed'
      }
      if(editing) {
        className = 'editing'
      }
      return ( 
              <li key={id} className={className}>
                  <View
                        descr={descr}  
                        editing = {editing}
                        created = {created}
                        onDeleted ={() =>{onDeleted(id)}}
                        onToggle = {() => {onToggle(id)}}
                        done = {done}
                        onToggleEditing={() => onToggleEditing(id)}
                        onFormatLabel={(descr) => onFormatLabel(id,descr)}

                  /> 
             </li>
      )   
    });
  
    return <ul className="todo-list">
              {itemTasks}
           </ul>
  }
}

TaskList.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onToggleEditing:PropTypes.func.isRequired,
  onFormatLabel:PropTypes.func.isRequired,

  dataTasks:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      descr: PropTypes.string,
      editing: PropTypes.bool,
      created: PropTypes.string,
      done: PropTypes.bool,
    })
  ).isRequired,
}
