import React from "react";
import Completed from "./Completed";

// const Tasks = (props) => {
//     return (
//         <div className='task'>
//             <span className="task-text">{props.text}</span>
//             <Completed />
//         </div>
//     )
// }

class Items extends React.Component{
    constructor() {
        super()
        this.state = {
            text: "",
            done: true,
            id: 100
        }
    };

    render() {
        return (
            <div className='item'>
                <span className="item-text">{this.props.text}_____</span>
                <Completed 
                    text = {this.props.text}
                    done = {this.props.done}
                    index = {this.props.index}
                    toggleDone = {this.props.toggleDone}
                />
            </div>
        )
    }

}


export default Items;