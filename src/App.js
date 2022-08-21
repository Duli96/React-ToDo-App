
import React from 'react';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Listitems from "./todolist";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

library.add(faTrash);

 class App extends  React.Component{
   constructor(props){
       super(props);

       this.state = {
           todoList:[],
           currentTodo :{
               key:"",
               todo:"",
               completed:false
           },


       }
   }
//handles the input field data
    handleInput = (e) =>{
       var current = e.target.value;

       this.setState({
           currentTodo :{
               key:Date.now(),
               todo:current,
               completed:false
           },


       });
   }


   //Add an item to the item list
     AddItemToList = (e) =>{
       e.preventDefault();
         var currentItem = this.state.currentTodo;

         if(currentItem.todo !== "" ){

             var itemlist = [currentItem,...this.state.todoList];

             this.setState({
                 todoList:itemlist,
                 currentTodo:{
                     key:"",
                     todo:"",
                     completed:false
                 },
                 edit:false,
         });
         }
     }


//delete an item from item list
     deleteItem = (key) =>{

           var remainItems = this.state.todoList.filter(item => item.key !== key);

           this.setState({
                todoList:remainItems

               }
           );
     }


//edit selected item
     editItem = (key) =>{
         var remainItems = this.state.todoList.filter(item => item.key !== key);
        const sItem = this.state.todoList.find(item => item.key == key);
         console.log(sItem.todo);
         this.setState({
                 todoList:remainItems,
                currentTodo:{
                     todo:sItem.todo,
                    key:key,
                    completed:false
                },
             edit:true,
             }
         );
     }


   //Invokes when completing an item
     completingItem = (key)=>{
         var remainItems = this.state.todoList.filter(item => item.key !== key);
         const findTodo = this.state.todoList.find(item => item.key == key);
         const newTodo = {
             key:findTodo.key,
             todo:findTodo.todo,
             completed:!findTodo.completed
         }



         var itemlist = [...remainItems,newTodo];


        this.setState({

            todoList: itemlist
        })

     }


   render() {

       return (

           <Container>

               <div className="Fullcontainer" align="center">

                   <Header></Header>
                   <br/>
                   <div className="workspace">
                       <form id="form" onSubmit={this.AddItemToList} >

                           <input type="text" placeholder="Enter Task" value = {this.state.currentTodo.todo} onChange={this.handleInput}

                           />

                           <Button variant={this.state.edit ? "warning":"btn btn-primary"} type = "submit" >

                               {this.state.edit ? "Edit To-Do":"Add To-Do"}</Button>{' '}

                       </form>
                   </div>

                   <div>
                       <Listitems todo = {this.state.todoList} delt = {this.deleteItem} edit = {this.editItem} completed = {this.completingItem} />
                       <br/>
                   </div>

               </div>
           </Container>


       );
   }

 }
export default App;
