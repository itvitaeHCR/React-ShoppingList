import App from "./App";

const Completed = (props) => {
    return (
        <span className='complete'>
            <button className="item-completed" onClick={() => props.toggleDone(props.index, true)}> done? </button>
        </span>
    )
}

export default Completed;

//onClick={() => this.props.changeScore(this.props.index, -1)}