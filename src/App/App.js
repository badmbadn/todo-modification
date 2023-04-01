import React, {Component} from "react";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import './App.css'
import  {formatDistanceToNow} from 'date-fns';

export default class App extends Component {

    maxId = 0
    timeInterval = 5000;

    state = {
        data: [],
        filter: ''               
    }

    componentDidMount() {
        this.setState({
            data : [
                this.createTodoItem('Завершенная задача'),
                this.createTodoItem('Editin task'),
                this.createTodoItem('Активная задача')
            ]
        })

        this.timerId = setInterval(
            () => this.timerTask(),this.timeInterval
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    onToggle = (id) => {
        
        this.setState(({data}) => {
            const res = data.map(item => (item.id === id ? { ...item, done:!item.done} : item))
            return {
                data:res
            }
        })
    }

    onToggleEditing = (id) => {

        this.setState(({data}) => {
           const res = data.map((el) => (el.id === id ? { ...el, editing: !el.editing } : el))
           return {
            data:res
           }
        })
    }

    onFormatLabel = (id,descr) => {

        this.setState(({data}) => {
            const res = data.map((el) => (el.id === id ? { ...el, descr, editing: !el.editing } : el))
            return {
             data:res
            }
         })
    }

    createTodoItem(descr) {

        const currentTime = new Date();
        return {      
            descr,
            id:this.maxId++,
            done:false,
            editing:false,
            created:'created 1 second ago',
            currentTime,   
        }
    }

    timerTask = () => {

        this.setState(({ data }) => ({
            data: data.map((task) => {
                const created = formatDistanceToNow(new Date(task.currentTime), { includeSeconds: true });
      
                return { ...task, created };
            })
          }));
       
       
    }

    addItem = (text) => {

        const newItem = this.createTodoItem(text)
        this.setState(({data}) => {
            const newData = [...data,newItem]

            return {
                data:newData
            }
        })
    }
    
    deleteItem = (id) => { 

        this.setState(({data}) => {
            const index = data.findIndex((todo) => todo.id === id)
            return {
                data: [...data.slice(0, index), ...data.slice(index + 1)],
            } 
        })
        
    }
    
    onFilterChange = (filter) => {
        this.setState({filter})
    }

    filter(items, filter) {
        switch(filter) {
         case 'all':
           return items;
         case 'active':
           return items.filter((item) => !item.done);
         case 'completed':
           return items.filter((item) => item.done) ;
         default:return items;
        }
     }
     
    deleteCompletedItem = () => {
        this.setState(({data}) => {
            const res = [...data].filter(el => !el.done)

            return {
                data:res
            }
        })
    }

    

    render () {
        const {data,filter} = this.state;
        const visibleItems = this.filter(data,filter)
        const todoCount = data.filter(el => !el.done).length
        return (
            <section className="todoapp">
                <Header addItem = {this.addItem}/>
                <section  className="main">
                    <TaskList
                        dataTasks={visibleItems} 
                        onDeleted = {this.deleteItem}
                        onToggle = {this.onToggle}
                        onToggleEditing = {this.onToggleEditing}
                        onFormatLabel = {this.onFormatLabel}
                    
                    />
                    <Footer filter={filter} 
                            onFilterChange = {this.onFilterChange}
                            deleteCompletedItem = {this.deleteCompletedItem}
                            todoCount = {todoCount}
                    />
                </section>
            </section>
        )
    }
}


