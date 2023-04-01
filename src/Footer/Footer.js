import React, {Component} from "react";
import PropTypes from 'prop-types';
import TaskFilter from "../TasksFilter/TaskFilter";
import './Footer.css'


export default class Footer extends Component{

    btnStatus = [ 
        {name:'all',label:'All',id:1},
        {name:'active',label:'Active',id:2},
        {name:'completed',label:'Completed',id:3},
    ]

    render () {
        const {onFilterChange,filter,deleteCompletedItem,todoCount} = this.props;
        return (
            <footer className="footer">
                <span className="todo-count">{`${todoCount} шт.осталось`}</span>
                <TaskFilter valueBtns={this.btnStatus}
                            filter ={filter}
                            onFilterChange = {onFilterChange}/>
                <button className="clear-completed"
                        onClick={deleteCompletedItem}>
                    clear completed
                </button>
            </footer>
        )
    }

    
}

Footer.defaultProps = {
    filter:'All',
    todoCount:'how long',
};

Footer.propTypes ={
    filter: PropTypes.string,
    todoCount: PropTypes.number,
    onFilterChange: PropTypes.func.isRequired
}