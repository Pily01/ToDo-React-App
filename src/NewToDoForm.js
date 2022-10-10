import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import "./NewToDoForm.css"

class NewToDoForm extends Component{
    constructor(props){
        super(props);
        this.state = {text: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(ev){
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    handleSubmit(ev){
        ev.preventDefault();
        const newToDo = { text: this.state.text, id: uuidv4(), completed: false}
        this.props.createToDo(newToDo);
        this.setState({ text:""})
    }

    render(){
        return(
            <div className='form-container'>
                <form className= "NewToDoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="newToDo"> New Todo</label>
                    <input 
                    type= "text"
                    placeholder='Task'
                    name = "text"
                    id= "newToDo"
                    value = {this.state.text}
                    onChange = {this.handleChange}
                    />
                    <button> Add </button>
                </form>
               
            </div>
        )
    }
}

export default NewToDoForm;