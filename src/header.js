import React from "react";
import './header.css';

//Displays title and date
class Header extends React.Component{

    constructor(props){
        super(props);

    }
     gettingDate = ()=> {

         var today = new Date();
         return today.toDateString();
     }

     render(){

        return(
            <div className= "mydaycontainer">
                <header className= "name">
                    <br/>
                    <h1>To Do List</h1>
                </header>

                <br/><br/>

                <div className= "myday" align="left">
                <h3>
                    &nbsp;
                    My Day
                </h3>


                <h5>
                    &nbsp;&nbsp;&nbsp;
                    {this.gettingDate()}
                </h5>

                </div>

            </div>


        );
     }

}

export default Header;