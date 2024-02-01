// LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import TitleComponent from '../components/title';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';



import '../background.css'


const LoginPage = ({ onLogin, users }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      onLogin(username); 
      if (user.employee === 1) {
        navigate('/employee');
      } else {
        navigate('/buyer');
      }

    } else {
      alert('Invalid username or password.');
    }
  };
  const handleReg = () => {
    // Perform additional validation if needed

    navigate('/registration');

  };

  return (
    <div className="login-page">
      <div>
      <TitleComponent title="POSLASTIČARNICA ''SLATKI ZALOGAJI''" />
        {}
      </div>

      <div className='nav'>
<li>
<Stack direction="column" spacing={3}>
            <label>Korisnicko ime:</label>
            <br></br>
            <br></br>

            <label>Lozinka:</label>
</Stack>
</li>
<li>
<Stack direction="column" spacing={2}>
<TextField   sx={{ backgroundColor: 'white' }}
 label="Korisnicko ime" variant="filled" value={username}  onChange={(e) => setUsername(e.target.value)} />
            <br></br>
            <TextField   sx={{ backgroundColor: 'white' }}
type="password" label="Lozinka" variant="filled"value={password} onChange={(e) => setPassword(e.target.value)} />
</Stack>
</li>
           
           </div>
            <br></br>
            <div className='cent'>
        <Button variant="contained" onClick={handleLogin} sx={{ backgroundColor: 'black' }} >
        Login
      </Button>
       <br>
       </br>
       <br>
       </br>
       
       <Button variant="contained" sx={{ backgroundColor: 'black' }} onClick={handleReg}>
           Register
         </Button>
    
      </div>
      </div>
     
      
      
  );
};

export default LoginPage;
