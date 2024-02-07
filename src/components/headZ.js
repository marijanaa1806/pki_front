// Head.jsx
import React from "react";
import Menu from "./menu";
import TitleComponent from "./title";
import { useNavigate } from "react-router-dom";


const HeadZ = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    sessionStorage.removeItem("user");
    navigate("/");
  };

  const menuItems = [
   
    { to: "/change", label: "Promena podataka" },
    { to: "/", label: "Odjava", onClick: handleLogout },
  ];

  return (
    <div>
      <TitleComponent title="POSLASTIČARNICA ''SLATKI ZALOGAJI''" />
  
      <Menu items={menuItems} />
    </div>
  );
};

export default HeadZ;
