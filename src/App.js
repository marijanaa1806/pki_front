import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import Layout from "./pages/layout";
import LoginPage from "./pages/login";
import RegistrationPage from "./pages/registration";
import React,{useState} from "react";
import Employee from "./pages/employee";
import Buyer from "./pages/buyer";
import ChangePage from "./pages/change";
import Contact from "./pages/contact";
import Cakes from "./pages/cakes";
import Promo from "./pages/promo";
import Details from "./pages/details";

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([
    { username: 'marijana', password: '123', employee: '0',name:"marijana",surname:"vacic",phone:"0692314344",address:"avalska" },
    { username: 'petar', password: '1234', employee: '1',name:"petar",surname:"radivojevic",phone:"0658830263",address:"27marta" },
  ]);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleRegister = ({
    username,
    password,
    employee,
    name,
    surname,
    phone,
    address
    
  }) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { username, password, employee,name, surname, phone, address},
    ]);
    alert('Uspešna registracija!');
  };
  
 

  const handleUpdate = ({
    username,
    password,
    employee,
    name,
    surname,
    phone,
    address
    
  }) => {
    if (username && password && name && surname && phone && address && employee) {
      const updatedUserIndex = users.findIndex(user => user.username === loggedInUser);
  
      if (updatedUserIndex !== -1) {
        const updatedUser = {
          username,
          password,
          name,
          surname,
          phone,
          address,
          employee
        };
  
        const updatedUsers = [...users];
        updatedUsers[updatedUserIndex] = updatedUser;
  
        setUsers(updatedUsers);
        sessionStorage.setItem('user', JSON.stringify(updatedUser));
  
       
      } else {
        alert('Korisnik ne postoji');
      }
    } else {
      alert('Unesite sve podatke');
    }
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<LoginPage onLogin={handleLogin} users={users} />}>
          <Route index element={<Outlet />} />
        </Route>
        <Route path="registration" element={<RegistrationPage onRegister={handleRegister} />}/>
        <Route path="change" element={<ChangePage onUpdate={handleUpdate} />}/>
        <Route path="employee" element={<Employee  />}/>
        <Route path="buyer" element={<Buyer  />}/>
        <Route path="contact" element={<Contact  />}/>
        <Route path="cakes" element={<Cakes  />}/>
        <Route path="promo" element={<Promo  />}/>
        <Route path="details" element={<Details  />}/>


      </Routes>
    </BrowserRouter>
  );
}
