import React from "react";
import './todolist.css';
//Displays the item list
function Listitems(props){

    const list = props.todo;

    var itemlist = list.map(item =>{



        return(
            <div className= "list" key = {item.key}>

                <p className={item.completed ? "deco":"deco1"} >{item.todo}
                    <span>

                        <i className="material-icons" alt = "aaa" onClick={() =>props.completed(item.key)}>assignment_turned_in</i>
                         &nbsp;
                        <i className="material-icons" onClick={() => props.edit(item.key)}>mode_edit</i>
                        &nbsp;
                       <i className="material-icons"  onClick={() => props.delt(item.key)}>delete_forever</i>


                </span>
                </p>

                </div>


        );



    });
return(<div>{itemlist}</div>);

}
export default Listitems;