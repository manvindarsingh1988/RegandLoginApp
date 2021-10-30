import React, { Component } from 'react';  
import { withRouter } from "react-router";  
import { Label, Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  
class Reg extends Component {  
  
  constructor() {  
    super();  
  
    this.state = {  
      FirstName: '',  
      LastName: '',
      Email: '',  
      Password: '', 
      ConfirmPassword: '', 
      TelPhone: '',
      IsT_CAgreed: false,
      IsMarketingOptIn: false  
    }    
     
    this.Email = this.Email.bind(this);  
    this.Password = this.Password.bind(this);  
    this.FirstName = this.FirstName.bind(this); 
    this.LastName = this.LastName.bind(this);   
    this.ConfirmPassword = this.ConfirmPassword.bind(this); 
    this.TelPhone = this.TelPhone.bind(this);  
    this.IsT_CAgreed = this.IsT_CAgreed.bind(this);  
    this.IsMarketingOptIn = this.IsMarketingOptIn.bind(this);
    this.register = this.register.bind(this);  
  }  
  
  
  
  Email(event) {  
    this.setState({ Email: event.target.value })  
  }  
  
  TelPhone(event) {  
    this.setState({ TelPhone: event.target.value })  
  } 
  
  IsT_CAgreed(event) {  
    this.setState({ IsT_CAgreed: event.target.checked })  
  }  

  IsMarketingOptIn(event) {  
    this.setState({ IsMarketingOptIn: event.target.checked })  
  }  
  
  Password(event) {  
    this.setState({ Password: event.target.value })  
  }

  ConfirmPassword(event) {  
    this.setState({ Password: event.target.value })  
  } 

  FirstName(event) {  
    this.setState({ FirstName: event.target.value })  
  }  

  LastName(event) {  
    this.setState({ LastName: event.target.value })  
  }

  register(event) {  
  
    fetch('https://localhost:44325/api/login/InsertEmployee', {  
      method: 'post',  
      headers: {  
        'Accept': 'application/json',  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({  
        FirstName: this.state.FirstName,  
        LastName: this.state.LastName,
        Email: this.state.Email,  
        Password: this.state.Password, 
        ConfirmPassword: this.state.ConfirmPassword, 
        TelPhone: this.state.TelPhone,
        IsT_CAgreed: this.state.IsT_CAgreed,
        IsMarketingOptIn: this.state.IsMarketingOptIn  
      } )  
    }).then((Response) => Response.json())  
      .then((Result) => {  
        if (Result.Status == 'Success')  
        {
            this.props.onUsernameChange(this.state.FirstName);
            this.props.history.push('/Dashboard');
        } 
        else  
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
      })  
  }  
  
  render() {  
  
    return (  
      <div className="app flex-row align-items-center">  
        <Container>  
          <Row className="justify-content-center">  
            <Col md="9" lg="7" xl="6">  
              <Card className="mx-4">  
                <CardBody className="p-4">  
                  <Form>  
                    <div class="row" className="mb-2 pageheading">  
                      <div class="col-sm-12 btn btn-primary">  
                        Sign Up  
                        </div>  
                    </div>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.FirstName} placeholder="Enter User First Name" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.LastName} placeholder="Enter User Last Name" />  
                    </InputGroup>
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.Email} placeholder="Enter Email" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="password"  onChange={this.Password} placeholder="Enter Password" />  
                    </InputGroup> 
                    <InputGroup className="mb-3">  
                      <Input type="password"  onChange={this.ConfirmPassword} placeholder="Confirm Password" />  
                    </InputGroup>   
                    <InputGroup className="mb-4">  
                      <Input type="text"  onChange={this.TelPhone} placeholder="Enter Phone Number" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                        <Label check>
                            <Input type="checkbox"  checked={this.state.IsT_CAgreed} onClick={this.IsT_CAgreed} /> 
                            <span>Terms and Conditions Agreed</span>
                        </Label>                       
                    </InputGroup>  
                    <InputGroup className="mb-4"> 
                        <Label check>
                            <Input type="checkbox"  checked={this.state.IsMarketingOptIn} onClick={this.IsMarketingOptIn} placeholder="Enter Department" /> 
                            <span>Marketing Opt In</span>
                        </Label>                       
                    </InputGroup>  
                    <Button  onClick={this.register}  color="success" block>Create Account</Button>  
                  </Form>  
                </CardBody>  
              </Card>  
            </Col>  
          </Row>  
        </Container>  
      </div>  
    );  
  }  
}  
  
export default withRouter(Reg); 