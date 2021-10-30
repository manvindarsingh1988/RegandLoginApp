import React, { Component } from 'react';    
import './App.css';  
import Login from './Login';  
import Reg from './Reg';  
import Dashboard from './Dashboard';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
const UsernameContext = React.createContext('');
class App extends Component {  
  constructor(props) {
    super(props);
    this.state = { UserName: '' };
  }

  onUsernameChange = (username) => {
    this.setState({ 
      UserName: username
    });
  }
  render() {
  return (  
    <Router>    
      <div className="container">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/Login'} className="nav-link">Login</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/Signup'} className="nav-link">Sign Up</Link>    
              </li>    
               
            </ul>    
          </div>    
        </nav> <br /> 
        <UsernameContext.Provider value={this.state.username}>  
          <Switch>    
            <Route exact path='/Login' render={()=><Login onUsernameChange={this.onUsernameChange} history={this.props.history} /> }></Route>   
            <Route path='/Signup' render={()=><Reg onUsernameChange={this.onUsernameChange} history={this.props.history}/> } />
          </Switch>    
          <Switch>  
          <Route path='/Dashboard' render={()=><Dashboard UserName={this.state.UserName} /> } />    
          </Switch>  
        </UsernameContext.Provider> 
      </div>    
    </Router>   
  ); 
  } 
}  
  
export default App;  