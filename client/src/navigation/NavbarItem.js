import React , {Component} from 'react';


export default class NavbarItem extends Component{
    constructor(props){
        super(props)
        this.state = {name: 'Unternehmen'}
    }

    render(){
        return(
            <div>
                <a href={this.state.name} >{this.state.name}</a>
            </div>
        )
    }
}