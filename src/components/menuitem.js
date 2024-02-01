
import React from 'react';
import { Link ,useNavigate,useLocation } from 'react-router-dom';
import Swal from "sweetalert2";
const MenuItem = ({ to, label }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const orders = sessionStorage.getItem("ordersList");
    const [orderList, setOrderList] = React.useState(JSON.parse(orders) || []);
   
    const handleClick = () => {
      if (label === 'Obavestenja') {
       const userS = sessionStorage.getItem('user');
       const user = JSON.parse(userS);
        const userOrders = orderList.filter(orderItem => orderItem.user === user.username);

        const currentPath = location.pathname;
      const notificationsList = userOrders.map((orderItem, index) => `
      <li key=${index}>
        <strong>Status:</strong> ${orderItem.status}<br>
        <strong>Porudžbina:</strong>
        <ul>
          ${orderItem.order.map((order, orderIndex) => `
            <li key=${orderIndex}>
              ${`Artikal: ${order.item}, Kolicina: ${order.quantity}, Cena: ${order.price}`}
            </li>
          `).join('')}
        </ul>
      </li>
    `).join('');
    
        Swal.fire({
          title: "Obavestenja",
          html: `
            <ul>
              ${notificationsList}
            </ul>
          `,
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Zatvori"
      
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(currentPath);
          } 
        });
      }
      if (label === 'Korpa') {
      
      
        const currentPath = location.pathname;
        const orderS = sessionStorage.getItem('orderData');
        const order = JSON.parse(orderS) || [];
        const totalOrderPrice = order.reduce((sum, orderitm) => sum + orderitm.price*orderitm.quantity, 0);
        const formattedTotalOrderPrice = totalOrderPrice.toFixed(2);
       
        const orderList = order.map((orderItem, index) => `
  <li key=${index}>
    <strong>Artikal:</strong> ${orderItem.item}<br>
    <strong>Kolicina:</strong> ${orderItem.quantity}<br>
    <strong>Cena:</strong> ${orderItem.price}<br>
  </li>
`).join('');


        Swal.fire({
          title: "Korpa",
          html: `
            <ul>
              ${orderList}
            </ul>
            <label>Ukupno: ${formattedTotalOrderPrice}</label>
          `,
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Naruci",
          cancelButtonText:"Zatvori"
      
        }).then((result) => {
          if (result.isConfirmed) {
            const userS = sessionStorage.getItem('user');
            const user = JSON.parse(userS);
            const orderS = sessionStorage.getItem('orderData');
            const order = JSON.parse(orderS) || [];
            const userDataWithOrders = {
              user:user.username,
              order:order,
              status:"waiting"
            };
            const existingOrderListString = sessionStorage.getItem('ordersList');
            const existingOrderList = JSON.parse(existingOrderListString) || [];
            existingOrderList.push(userDataWithOrders);
            sessionStorage.setItem('ordersList', JSON.stringify(existingOrderList));
            sessionStorage.removeItem('orderData');
            navigate(currentPath);
          } else if(result.isDismissed){
            navigate(currentPath);
          }
        });
      }
    };
    
  
    return (
      <li>
        <Link to={to} style={{ color: '#ffffff' }} onClick={handleClick}>
          {label}
        </Link>
      </li>
    );
  };
  
  export default MenuItem;