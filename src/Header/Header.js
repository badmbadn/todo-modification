import React,{Component} from "react";
import PropTypes from 'prop-types';
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import './Header.css'

export default class Header extends Component {

    render() {
        const {addItem} = this.props
        return (
            <header className="header">
                <h1>Дела</h1>
                <NewTaskForm addItem = {addItem } />
            </header> 
        )
    }
    
}

Header.propTypes = {
    addItem: PropTypes.func.isRequired
}