import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import {Button} from 'react-bootstrap'; // Import Form.Check component and Col

function LoginForm() {
  const [cust, setCust] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const catid = sessionStorage.getItem("catid");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    // try {
    //   const response = await axios.get('http://localhost:8081/api/customer_master/login', {
    //     params: { username, password }
        
    //   });
    //   if (response.data === '') {   // if login failed empty string returned 
    //     alert('No user found. Please Enter Valid Credential.');
    //   }
    //   else {
    //     alert("!!! User Logged In successfully !!!")
    //     console.log(response.data);
    //     sessionStorage.setItem("uid", response.data); // returned custid with successful session storage
    //     const custId = sessionStorage.getItem("uid");
    //     console.log(custId);
    //     navigate(`/bybooking/${pkgId}`);
    //   }
    // } catch (error) {
    //   alert('Login failed:', error.response ? error.response.data : error.message);
    // }


    // try {
    //   fetch(`https://localhost:7003/api/Customer/login/${username}/${password}`).then(res=>res.json).then(result=>{
    //   if (result === '') {   // if login failed empty string returned 
    //     alert('No user found. Please Enter Valid Credential.');
    //   }
    //   else {
    //     alert("!!! User Logged In successfully !!!")
    //     console.log("khali bagh");
    //     setCust(result);
    //     console.log(cust.custId);
    //     sessionStorage.setItem("uid", cust.custId); // returned custid with successful session storage
    //     const cust = sessionStorage.getItem("uid");
    //     console.log(cust);
    //     navigate(`/bybooking/${pkgId}`);
    //   }});
    // } catch (error) {
    //   alert('Login failed:', error.response ? error.result.custId : error.message);
    // }
    try {
      fetch(`https://localhost:7003/api/Customer/login/${username}/${password}`)
        .then(res => res.json())
        .then(result => {
          if (result === '') {   // if login failed empty string returned 
            alert('No user found. Please Enter Valid Credential.');
          } else {
            alert("!!! User Logged In successfully !!!")
            console.log("khali bagh");
            const cust = result; // Define cust here
            console.log(cust.custId);
            sessionStorage.setItem("uid", cust.custId);
            const storedCustId = sessionStorage.getItem("uid");
            console.log("he pahije");
            console.log(storedCustId);
            
            // navigate(`/bybooking/${pkgId}`);
            if(catid==null)
            {
              navigate('/');
            }
            else{
            navigate(`/bypassenger/${catid}`);
            }
          }
        });
    } catch (error) {
      console.error('Login failed:', error.message);
    }
    
  };

 // alert(localStorage.getItem("uid"));

  return (
    
    // <div className='logincss'>
    //   <table>
    //     <tr>
    //     <td>Username :</td>
    //       <td><input
    //     type="text"
    //     placeholder="Username"
    //     value={username}
    //     onChange={handleUsernameChange}
    //   /></td>
    //     </tr>
    //     <tr>
    //       <td>Password :</td>
    //       <td>
    //       <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={handlePasswordChange}
    //   />
    //       </td>
    //     </tr>
    //     <tr>
    //       <td>
    //       <Button variant="primary" onClick={handleSubmit}>
    //                         Login
    //     </Button>
    //       </td>
    //       <td>
    //       <Button variant="primary" onClick={() =>  navigate(`/Registration`)}>
    //                         Go To Registration
    //     </Button>
    //       </td>
    //     </tr>
    //     </table>
      
      
      
    // </div>
    <div className='logincss'>
    <table>
      <tr>
        <td style={{ fontWeight: 'bold', fontSize: '16px', paddingRight: '10px' }}>Username :</td>
        <td>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold', fontSize: '16px', paddingRight: '10px' }}>Password :</td>
        <td>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </td>
      </tr>
      <tr>
        <td>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </td>
        <td>
          <Button variant="primary" onClick={() => navigate(`/Registration`)}>
            Go To Registration
          </Button>
        </td>
      </tr>
    </table>
  </div>
  );
}

export default LoginForm;