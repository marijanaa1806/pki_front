// RegistrationPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom";
import '../styles.css'
import '../background.css'
import TitleComponent from '../components/title';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';



const ChangePage = ({ onUpdate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [employee, setEmployee] = useState('');

  useEffect(() => {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUsername(user.username || '');
      setPassword(user.password || '');
      setName(user.name || '');
      setSurname(user.surname || '');
      setPhone(user.phone || '');
      setAddress(user.address || '');
      setEmployee(user.employee || '');
    }
  }, []);

  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setEmployee(event.target.value);
  };

  const handleUpdate = () => {
  
    if (username && password && name && surname && phone && address && employee) {
     
        onUpdate({ username, password,employee,name,surname,phone,address });
        if (employee === '1') {
          alert('Uspešno ažurirano.');

          navigate('/employee');
        } else {
          alert('Uspešno ažurirano.');

          navigate('/buyer');
        }
      } else {
        alert('Korisnik ne postoji');
      }
   
  };
  

  return (
    <div className="login-page">
       <div>
      <TitleComponent title="POSLASTIČARNICA ''SLATKI ZALOGAJI''" />
        {}
      </div>
      <form>

      <div class="nav">
            <li>
            <Stack direction="column" spacing={5}>
            <div>
            <label>Ime:</label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <label>Prezime:</label>
            </div>
            </Stack>
            </li>

            <li>
            <Stack direction="column" spacing={4}>
            <div>
                <TextField   sx={{ backgroundColor: 'white' }}
 label="Ime" variant="filled" value={name} onChange={(e) => setName(e.target.value)} />
                <br></br>
                <br></br>
                <TextField   sx={{ backgroundColor: 'white' }}
 label="Prezime" variant="filled"value={surname} onChange={(e) => setSurname(e.target.value)} />
            </div>
            </Stack>
            </li>

            <li>
            <Stack direction="column" spacing={5}>
            <div>
            <label>Korisničko ime:</label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <label>Lozinka:</label>
            </div>
            </Stack>
            </li>

            <li>
            <Stack direction="column" spacing={4}>
            <div>
            <TextField   sx={{ backgroundColor: 'white' }}
 label="Korisnicko ime" variant="filled"value={username} onChange={(e) => setUsername(e.target.value)} />
                <br></br>
                <br></br>
                <TextField   sx={{ backgroundColor: 'white' }}
 label="Lozinka" variant="filled"type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            </Stack>
            </li>

            <li>
              
            <Stack direction="column" spacing={5}>
            <div>
            <label>Kontakt telefon:</label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <label>Adresa:</label>
            </div>
            </Stack>
            </li>

            <li>
            <Stack direction="column" spacing={4}>

            <div>
            <TextField   sx={{ backgroundColor: 'white' }}
  label="Telefon" variant="filled"value={phone} onChange={(e) => setPhone(e.target.value)} />
                <br></br>
                <br></br>
                <TextField   sx={{ backgroundColor: 'white' }}
 label="Adresa" variant="filled" value={address} onChange={(e) => setAddress(e.target.value)} />
               
            </div>
            </Stack>
            </li>

      
      
    
        </div>

        <div class="cent">
        <Stack direction="row" spacing={2}>

        
        <Button variant="contained" sx={{ backgroundColor: '#461607' }} onClick={handleUpdate}>Izmeni</Button>
        </Stack>
        </div>
       
      </form>
    </div>
  );
};

export default ChangePage;
