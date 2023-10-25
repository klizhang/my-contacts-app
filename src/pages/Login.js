import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from "react";
// import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom"

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: props.user,
            isLoggedIn: false,
        };
        this.handleLogin = this.handleLogin.bind(this);
        
    }
    
    async handleLogin(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        try{
            const response = await axios.post('http://localhost:5001/api/users/login',formJson);
            console.log(response.data);
            // setMessage(JSON.stringify(response.data));
            if (response.data.ID){
                localStorage.setItem("userID",response.data.ID);
                localStorage.setItem("username",response.data.username);
                // this.setState({user : response.data.Success})
                this.props.handler(response.data.ID);
                // navigate('/');
                this.setState({isLoggedIn : true});
            }
            console.log(localStorage);
        } catch (error) {
            localStorage.setItem("userID","");
            localStorage.setItem("username","");
            console.log(error.response.data.message);
            // this.setState({user: ""})
            this.props.handler("Blank");
        }
    }
    render() {
        // const navigate = useNavigate();
        return (
            <div>
                {this.state.isLoggedIn && <Navigate to='/' replace={true}/>}
                <Form onSubmit={this.handleLogin}>
                    <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
                <h1> Hello: {this.props.user} </h1>
            </div>
        )
    }
}

// const Login = () => {
//     async function handleLogin(e) {
//         // Prevent the browser from reloading the page
//         e.preventDefault();
//         const form = e.target;
//         const formData = new FormData(form);
//         const formJson = Object.fromEntries(formData.entries());
//         try{
//             const response = await axios.post('http://localhost:5001/api/users/login',formJson);
//             console.log(response.data);
//             // setMessage(JSON.stringify(response.data));
//             if (response.data.Success){
//             localStorage.setItem("userID",response.data.Success);
//             }
//             console.log(localStorage);
//         } catch (error) {
//             localStorage.setItem("userID","");
//             console.log(error.response.data.message);
//         }
//     }
//     return (
//         // <form method="post" onSubmit={handleLogin}>
//         //     <h1> LOGIN</h1>
//         //     <label>
//         //     Email: <input name="email"/>
//         //     </label>
//         //     <label>
//         //     Password: <input name="password"/>
//         //     </label>
//         //     <button type="reset">Reset form</button>
//         //     <button type="submit">Submit form</button>
//         // </form>
//         <Form onSubmit={handleLogin}>
//             <Form.Group className="mb-3" >
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" name="email" placeholder="Enter email" />   
//             </Form.Group>
//             <Form.Group className="mb-3" >
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" name="password" placeholder="Password" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//             Submit
//             </Button>
//         </Form>
//     );
//   };

// const Login = ({state,stateChanger}) => {
//     async function handleLogin(e) {
//         // Prevent the browser from reloading the page
//         e.preventDefault();
//         const form = e.target;
//         const formData = new FormData(form);
//         const formJson = Object.fromEntries(formData.entries());
//         try{
//             const response = await axios.post('http://localhost:5001/api/users/login',formJson);
//             console.log(response.data);
//             // setMessage(JSON.stringify(response.data));
//             if (response.data.Success){
//             localStorage.setItem("userID",response.data.Success);
//             stateChanger(response.data.Success);
//             }
//             console.log(localStorage);
//         } catch (error) {
//             localStorage.setItem("userID","");
//             console.log(error.response.data.message);
//             stateChanger("");
//         }
//     }
//     return (
//         // <form method="post" onSubmit={handleLogin}>
//         //     <h1> LOGIN</h1>
//         //     <label>
//         //     Email: <input name="email"/>
//         //     </label>
//         //     <label>
//         //     Password: <input name="password"/>
//         //     </label>
//         //     <button type="reset">Reset form</button>
//         //     <button type="submit">Submit form</button>
//         // </form>
//         <Form onSubmit={handleLogin}>
//             <Form.Group className="mb-3" >
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" name="email" placeholder="Enter email" />   
//             </Form.Group>
//             <Form.Group className="mb-3" >
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" name="password" placeholder="Password" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//             Submit
//             </Button>
//             <h1>Hi: {state}</h1>
//         </Form>
//     );
//   };
  
  export default Login;