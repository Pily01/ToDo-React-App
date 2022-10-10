import React, { Component } from 'react';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';
import "./ToDoList.css"

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = { toDos: []};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    remove(id){
        this.setState({
            toDos: this.state.toDos.filter(t => t.id !== id)
        })
    }

    create(newToDo){
        this.setState({
            toDos: [...this.state.toDos, newToDo]
        })
    }

    update(id, updatedToDo){
        const updatedToDos = this.state.toDos.map(toDo => {
            if(toDo.id === id){
                return({...toDo, text: updatedToDo})
            }else{
                return(toDo)
            }
        })
        this.setState({toDos: updatedToDos})
    }

    toggleCompletion(id){
        const updatedToDos = this.state.toDos.map(toDo => {
            if(toDo.id === id){
                return({...toDo, completed: !toDo.completed})
            }else{
                return(toDo)
            }
        })
        this.setState({toDos: updatedToDos})
    }

    render(){
        const toDos = this.state.toDos.map( toDo => (
            <ToDo
                text = {toDo.text}
                key = {toDo.id}
                id = {toDo.id}
                completed = {toDo.completed}
                remove = {this.remove}
                update = {this.update}
                complete = {this.toggleCompletion}
            />
        ))
        return(
            <div className="ToDoList">
                <h1> To Do List <span> A Simple React App</span></h1>
                <ul>
                    { toDos }
                </ul>
                <NewToDoForm createToDo = {this.create} />
            </div>
        )
    }
}

export default ToDoList;