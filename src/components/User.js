import classes from './User.module.css';
import {Component} from 'react'

class User extends Component {
  componentDidMount(){
    console.log("did mount");
  }
  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}


export default User;
