import {Component} from 'react';

class Stateclass extends Component
{
    constructor()
    {
        super();
        this.state={
            count : 1
        }
    }

    render()
    {
        const addCount=()=>{
            this.setState({count:this.state.count+1})
        }

        const removeCount=()=>{
            this.setState({count:this.state.count-1})
        }
        return(
            <div>
                <p>State with Class Component</p>
                <p>Count : {this.state.count}</p>
                <button onClick={()=>addCount()}> + </button>&nbsp;
                <button onClick={()=>removeCount()}> - </button>
            </div>
        );
    }
}

export default Stateclass;