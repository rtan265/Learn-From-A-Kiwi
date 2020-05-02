import React from 'react';
import './SignIn.css'; 

class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state = ({
      loginState: "student"
    });
  }

  toInstructor = () => {
    this.setState({
      loginState: "instructor"
    })
  }

  toStudent = () => {
    this.setState({
      loginState: "student"
    })
  }

  toggleLogin(){
    if (this.state.loginState === "student"){
      return(
        <form className = "sign-in-form">
        <h3 className="title-signin">Sign In as a <strong>Student</strong></h3>
        <div className = "form-group">
          <label>Email Address</label>
          <input type = "email" className = "form-control" placeholder= "Enter Email" style = {{width: "50%", margin: "auto"}}/>
        </div>

        <div className = "form-group">
          <label>Password</label>
          <input type = "password" className = "form-control" placeholder = "Enter Password" style = {{width: "50%", margin: "auto"}}/>
        </div>

        <div className = "form-group">
          <div className = "custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>  
        </div>

        <button type="submit" className="btn btn-primary btn-block" style = {{width: "30%", margin: "auto"}}>Submit</button>
        <div style = {{textAlign: "center"}}>
          Forgot <a href="#">password?</a>
        </div>
        <div>
            Are you an <a onClick ={this.toInstructor} href="javascript:;">instructor</a>?
          </div>
      </form>
      )
    } else {
      return (
        <form className = "sign-in-form">
          <h3 className="title-signin">Sign In as an <strong>Instructor</strong></h3>
          <div className = "form-group">
            <label>Email Address</label>
            <input type = "email" className = "form-control" placeholder= "Enter Email" style = {{width: "50%", margin: "auto"}}/>
          </div>
  
          <div className = "form-group">
            <label>Password</label>
            <input type = "password" className = "form-control" placeholder = "Enter Password" style = {{width: "50%", margin: "auto"}}/>
          </div>
  
          <div className = "form-group">
            <div className = "custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>  
          </div>
  
          <button type="submit" className="btn btn-primary btn-block" style = {{width: "30%", margin: "auto"}}>Submit</button>
          <div style = {{textAlign: "center"}}>
            Forgot <a href="#">password?</a>
          </div>
          <div>
            Are you a <a onClick ={this.toStudent} href="javascript:;">student</a>?
          </div>
        </form>
      );
    }
  }

  render() {
    return(
      <div>
        {this.toggleLogin()}
      </div>
    )
    
  }
}

export default SignIn;