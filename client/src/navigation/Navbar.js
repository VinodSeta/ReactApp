import React, {Component} from 'react';
import NavbarItem from './NavbarItem'

export default class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
              <NavbarItem />
            </div>
        )
    }
}
