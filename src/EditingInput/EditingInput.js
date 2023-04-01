import React, { Component } from "react";
import PropTypes from 'prop-types';
import './EditingInput.css';

export default class EditingInput extends Component {

    state = {
            value: '',
        }
    
    componentDidMount() {
        const {descr} = this.props;
        this.setState({value:descr});
        this.input.focus();
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {value} = this.state;
        const {onFormatLabel} = this.props;
        onFormatLabel(value)
    }

    handleChange = (e) => {
        this.setState({value:e.target.value})
    }

    blurring = () => {
        const {value} = this.state;
        const {onFormatLabel} = this.props;
        onFormatLabel(value)
    }

    render () {
        const {value} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    className="edit"
                    value={value}
                    onChange={this.handleChange}
                    onBlur={this.blurring}
                    ref={(input) => {
                        this.input = input
                    }}
                />

            </form>
        )
    }
}

EditingInput.defaultProps = {
    descr:'Editing Task'
};

EditingInput.propTypes = {
    descr:PropTypes.string,
    onFormatLabel: PropTypes.func.isRequired
}