import { Component } from "react";

export default class ContactsPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            input: '',
        }
    }

    changeInput = (e) =>{
        this.setState({input: e.target.value})
    }

    add = () =>{
        console.log(this.state);
        this.setState({input: ""})
    }
    clear = () =>{
        this.setState({input: ""})
    }

    render(){
        return (
            <>
                <p>Text input</p>
                <input
                    value={this.state.input}
                    type="text"
                    placeholder="Contact"
                    onChange={this.changeInput} />
                <button onClick={this.add}>Add</button>
                <button onClick={this.clear}>Clear</button>
            </>
        )
    }
}