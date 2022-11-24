import React from "react";
import WorksList from "../../components/worksList/WorksList";

export default class PortfolioPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            works:[],

        }
    }


    getWorks = () =>{
        this.setState({
            works:["Work1", "Work2", "Work3","Work4"]
        })
    }



    render() {
        return (
            <>
                <p>Beginning of work</p>
                <button onClick={this.getWorks}>Get works</button>
                <WorksList works = {this.state.works}/>
            </>
        )
    }
}