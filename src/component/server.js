import React,{Component} from "react"
import belanja from "./belanja"
import beranda from "./beranda"
import hari from "./hari"
import {Switch,Route} from "react-router-dom"

class server extends Component{
    render(){
        return (
            
            <Switch>
        <Route exact path="/" component={beranda}/>
        <Route path="/hari" component={hari}/>
        <Route path="/belanja" component={belanja}/>
    </Switch>
        )}
}

export default server
