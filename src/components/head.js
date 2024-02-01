// Head.jsx
import React from "react";
import Menu from "./menu";
import TitleComponent from "./title";
import { useNavigate } from "react-router-dom";


const Head = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    sessionStorage.removeItem("user");
    navigate("/");
  };
  const menuItems = [
    { to: "/promo", label: "Promocije" },
    { to: "/cakes", label: "Torte i kolaci" },
    { to: "/buyer", label: "Obavestenja" },
    { to: "/contact", label: "Kontakt" },
    { to: "/buyer", label: "Korpa" },
    { to: "/change", label: "Promena podataka" },
    { to: "/", label: "Odjava", onClick: handleLogout },
    // Add more menu items as needed
  ];

  return (
    <div>
      <TitleComponent title="POSLASTIČARNICA ''SLATKI ZALOGAJI''" />
  
      <Menu items={menuItems} />
    </div>
  );
};

export default Head;
