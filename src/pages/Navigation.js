import Nav from 'react-bootstrap/Nav';
import { Outlet } from "react-router-dom";
import React, {Component} from 'react';

class Navigation extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: "NONE"
    }
    this.logOut = this.logOut.bind(this);
    this.showLoggedIn = this.showLoggedIn.bind(this);
  }

  logOut(){
    localStorage.setItem("userID","");
  }

  showLoggedIn(user) {
    if (!user || user === ""){
      return (
        <>
          <Nav.Item>
            <Nav.Link href="/login" eventKey="link-1">Log In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/register" eventKey="link-2">Register</Nav.Link>
          </Nav.Item>
        </>
      );
    }
    return (
      <>
        <Nav.Item>
          <Nav.Link href="/mycontacts" eventKey="link-3">  My Contacts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/logout" eventKey="link-4">Log Out</Nav.Link>
          {/* <Nav.Link href="/login" eventKey="link-1">Log In</Nav.Link> */}
        </Nav.Item>
        </>
    );
  };
  render() {
    const user = localStorage.getItem("userID");
    return (
      <div>
        <Nav variant="underline" >
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          {this.showLoggedIn(user)}
          
        </Nav>
        <Outlet />
      </div>
      // <div>
      //   <Nav variant="underline" >
      //     <Nav.Item>
      //       <Nav.Link href="/">Home</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Nav.Link href="/login"eventKey="link-1">Log In</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Nav.Link href="/register" eventKey="link-2">Register</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Nav.Link href="/mycontacts" eventKey="link-3">  My Contacts</Nav.Link>
      //     </Nav.Item>
      //   </Nav>
      //   <Outlet />
      // </div>
      
    );
  }
}
// function Navigation() {
//   const user = localStorage.getItem("userID");
//   // showLoggedIn(user) {
//   //   if (!user || user == ""){
//   //     return (
//   //       <><Nav.Item>
//   //         <Nav.Link href="/login" eventKey="link-1">Log In</Nav.Link>
//   //       </Nav.Item><Nav.Item>
//   //           <Nav.Link href="/register" eventKey="link-2">Register</Nav.Link>
//   //         </Nav.Item></>
//   //     );
//   //   }
//   //   return (
//   //     <Nav.Item>
//   //         <Nav.Link href="/login"eventKey="link-1">Log In</Nav.Link>
//   //     </Nav.Item>
//   //   );
//   // };
//   return (
//     <div>
//       <Nav variant="underline" >
//         <Nav.Item>
//           <Nav.Link href="/">Home</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="/login"eventKey="link-1">Log In</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="/register" eventKey="link-2">Register</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="/mycontacts" eventKey="link-3">  My Contacts</Nav.Link>
//         </Nav.Item>
//       </Nav>
//       <Outlet />
//     </div>
    
//   );
// }

export default Navigation;