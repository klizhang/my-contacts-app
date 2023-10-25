import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacts = () => {
    const [message, setMessage] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:5001/message")
    //     .then((res) => res.json())
    //     .then((data) => setMessage(data.message));
    // }, []);
    // useEffect(() => {
        
    // }, []);

    async function handleContact(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
        formData.append("user_id",localStorage.getItem("userID"));
        const formJson = Object.fromEntries(formData.entries());
        try{
          const response = await axios.post('http://localhost:5001/api/contacts/',formJson);
          console.log(response.data);
          setMessage(JSON.stringify(response.data));
        } catch (error) {
          console.log(error.response.data.message);
          setMessage(error.response.data.message);
          console.log(message);
        }
    }

    async function getContacts(e) {
    e.preventDefault();
    try{
        // const sent = JSON.stringify({"user_id" : localStorage.getItem("userID")});
        // console.log(sent);
        // const response = await axios.get('http://localhost:5001/api/contacts/',sent);
        const response = await axios.get('http://localhost:5001/api/contacts/allcontacts/' + localStorage.getItem("userID"));
        console.log(response.data);
        // setMessage(JSON.stringify(response.data));
        setMessage(response.data);
        // setMessage(JSON.parse(response.data));

    } catch (error) {
        console.log(error.response.data.message);
        setMessage("");
    }
    }

    // const DisplayData=message.map(
    //     (info,index)=>{
    //         return(
    //             <tr key={index}>
    //                 <td>{info.name}</td>
    //                 <td>{info.email}</td>
    //                 <td>{info.phone}</td>
    //             </tr>
    //         )
    //     }
    // )

    return (
        <div>
            <Form onSubmit={handleContact}>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="password" name="phone" placeholder="Enter phone" />
                </Form.Group>
                <Button variant="primary" type="submit">Add Contact</Button>
            </Form>
            <Form onSubmit={getContacts}>
                <Button variant="primary" type="submit">See All My Contacts</Button>
            </Form>
            {/* <form method="post" onSubmit={handleContact}>
                <h1> My Contacts</h1>
                <label>
                Name: <input name="name"/>
                </label>
                <label>
                Email: <input name="email"/>
                </label>
                <label>
                Phone: <input name="phone"/>
                </label>
                
                <button type="reset">Reset</button>
                <button type="submit">Add Contact</button>
            </form>
            <form method="post" onSubmit={getContacts}>
                <button type="submit"> See All My Contacts</button>
            </form> */}
                  
            {/* <h1>{message}</h1> */}
            
            <table>
                <tbody>
                    {message.map((item, index) => (
                        <tr key={index}>
                            <td>{item.user_id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                        ))
                    } 
                </tbody>
            </table>
                
            
            {/* {DisplayData} */}
        </div>
        
    );
  };
  
  export default Contacts;