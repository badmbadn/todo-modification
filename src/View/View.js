import React, { Component } from "react";
import PropTypes, { bool, string } from 'prop-types';
import EditingInput from "../EditingInput/EditingInput";


export default class View extends Component  {

    render() {
        const {descr,onDeleted,onToggle,done,editing,onFormatLabel,onToggleEditing,created} = this.props
              
        const view = (
            <div className="view">
                <input  type="checkbox" checked ={done} className="toggle"
                onChange={onToggle}
                />
                <label >
                    <span className="description">{descr}</span>
                    <span className="created">{created}</span>
                </label>
                <button className="icon icon-edit" onClick={onToggleEditing}></button>
                <button className="icon icon-destroy" onClick={onDeleted}></button>
            </div>
        )

        return editing ? <EditingInput onFormatLabel={onFormatLabel} descr={descr}/> : view
    }
}

View.defaultProps = {
   descr: 'only string',
   created: 'time created' 
};
View.propTypes = {
    descr: string,
    created: string,
    done:bool,
    editing:bool,
    onDeleted: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onFormatLabel: PropTypes.func.isRequired,
    onToggleEditing: PropTypes.func.isRequired
}