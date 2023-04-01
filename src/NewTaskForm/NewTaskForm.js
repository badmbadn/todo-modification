import React, { Component } from "react";
import PropTypes from 'prop-types';
import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  
  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label:e.target.value
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.label)
    this.setState({
      label:''
    })
  }

  render() {
    return  <form onSubmit={this.onSubmit}> 
              <input 
                type= "text" 
                className="new-todo"
                placeholder='Что должно быть сделано?'
                value={this.state.label}
                onChange={this.onLabelChange}
              />
            </form>   
  }
  
}

NewTaskForm.propTypes = {
  addItem:PropTypes.func.isRequired
}
