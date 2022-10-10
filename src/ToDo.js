import React, { Component } from "react";
import "./ToDo.css"

class ToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            newText: this.props.text
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleRemove(){
        this.props.remove(this.props.id);
    }

    handleUpdate(ev){
        ev.preventDefault();
        this.props.update(this.props.id, this.state.newText);
        this.setState({...this.state, isEditing: false})
    }

    handleChange(ev){
        this.setState({
            [ev.target.name] : ev.target.value,
        })
    }

    handleComplete(){
        this.props.complete(this.props.id);
    }

    toggleForm(){
        this.setState({isEditing: !this.state.isEditing})
    }

    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div className = "ToDo">
                    <form className="edit-form" onSubmit={this.handleUpdate}>
                        <label htmlFor="newText"></label>
                        <input
                        type= "text"
                        placeholder='Edit Todo'
                        name = "newText"
                        id= "newText"
                        value = {this.state.newText}
                        onChange = {this.handleChange}
                        />
                        <button> <i class="fas fa-check-circle"></i> </button>
                    </form>
                </div>
            )
        }else{
            result = (
                 <div className = "ToDo">
                    <p className={this.props.completed ? "task completed" : "task"} onClick={this.handleComplete} > {this.props.text} </p>
                    <div className="buttons">
                        <button onClick={this.toggleForm}> <i class="fas fa-edit"></i> </button>
                        <button onClick={this.handleRemove}> <i class="fas fa-times-circle"></i> </button>
                    </div> 
                </div>
            )
        }
        return(result)
    }
}

export default ToDo;