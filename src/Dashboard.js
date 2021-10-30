import React, { Component } from 'react';  
import './App.css';  
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  class Dashboard extends Component {
    constructor(props) {
        super(props);
      }  
    render() {  
  
        return (  
            <div class="row" className="mb-2 pageheading">  
                <div class="col-sm-12 btn btn-primary">  
                    Welcome Back {this.props.UserName}  
             </div>  
            </div>  
        );  
    }  
}  
  
export default Dashboard;