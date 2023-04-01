import React,{Component} from "react";
import PropTypes from 'prop-types';
import './TaskFilter.css'

export default class TaskFilter extends Component{

    render() {
        const {filter,onFilterChange,valueBtns} = this.props;
        const elements = valueBtns.map(item => {
        const active = filter === item.name    
        const clazz = active ? 'selected' : null
        
        return <li key={item.name}>
                    <button className={clazz}
                            type="button"
                            onClick = {()=> onFilterChange(item.name)}
                            >
                           {item.label}
                    </button> 
               </li>
    })

    return (
        <ul className="filters">
            {elements}
        </ul>
    )
    }
    
}


TaskFilter.defaultProps = {
    filter:'All'
}

TaskFilter.propTypes = {
    filter:PropTypes.string,
    valueBtns:PropTypes.array.isRequired,
    onFilterChange: PropTypes.func.isRequired,
}
