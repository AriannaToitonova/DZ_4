import { Component } from "react"
import AboutUsText from "../../components/aboutUsText/AboutUsText"

export default class AboutUs extends Component{
    constructor(props){
        super(props)

        this.state = {
            class: false,

        }

    }


    handleClass = () =>{
        this.setState({class: !this.state.class})
    }

    render(){
        return(
            <>
                <p>About Us</p>
                {this.state.class === false
                    ?
                    <button onClick={this.handleClass} >Open text</button>
                    :
                    <button onClick={this.handleClass}>Close text</button>
                }
                <AboutUsText pClass = {this.state.class}/>
            </>
        )
    }
}