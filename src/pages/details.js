
import '../background.css'
import Head from "../components/head";
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Details = () => {
    const picture = sessionStorage.getItem('selectedImage');
    const pictureObject = JSON.parse(picture);
    const [quantity, setQuantity] = useState(null);
    const commentsOnArticles = sessionStorage.getItem('comments');
    const commList = JSON.parse(commentsOnArticles) || [];
    const filteredOrderList = commList.filter(item => item.picture === pictureObject.name);

 
    const [ comm,setComm] = useState(null);

    
    const handleOrder = () => {
      const orderData = {
        quantity: quantity,
        item:pictureObject.name,
        price:pictureObject.price
        
      };
      const existingOrderListString = sessionStorage.getItem('orderData');
      const existingOrderList = JSON.parse(existingOrderListString) || [];
      existingOrderList.push(orderData);
      sessionStorage.setItem('orderData', JSON.stringify(existingOrderList));
    
       
    };
    const [showAdditionalInput, setShowAdditionalInput] = useState(false);

    const handleButtonClick = () => {
      setShowAdditionalInput(true);
    };
    const handleButtonClick2 = () => {
      setShowAdditionalInput(false);
     
      const newComment = {
        picture:pictureObject.name,
        comment:comm
      };
      commList.push(newComment);
      sessionStorage.setItem('comments', JSON.stringify(commList));
      setComm('');
    };
  

    return (
        <div className="login-page">
          <Head />
          {}
          <div><span class="b"  style={{backgroundColor:'#F8F0F0', border: "1px solid black"      
}}>
          <img src={pictureObject.src} width={300} height={300} alt='kolac'></img>

            </span>
             <span class="b" style={{backgroundColor:'#F8F0F0', border: "1px solid black"      
}}>
             <h2>{pictureObject.name}</h2>
                

                <label>{pictureObject.about}</label>
                <br>
                </br>
                <br>
                </br>
                <label style={{ fontWeight: 'bold', fontSize: '16px' }}>Sastojci:</label>
      
                <br>
                </br>
                <label>{pictureObject.ingredients}</label>
      
               
                <br>
                </br>
                <br>
                </br>
                <label style={{ fontWeight: 'bold', fontSize: '18px' }}>{pictureObject.price}din</label>
      
              </span> 
              <span class="b">
              <label>Unesi kolicinu:</label>
              <br></br>
              <br></br>

          <TextField  sx={{ backgroundColor: 'white' }} label="Kolicina" variant="filled" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <br></br>
          <br></br>

          <Button variant="contained" onClick={handleOrder} sx={{ backgroundColor: '#461607' }}> Dodaj </Button>
    <br></br>
              </span>
              
               </div>  

        <div>
          <span className='b'>
          <div className={`lista ${filteredOrderList.length === 0 ? 'no-background' : '#F8F0F0'}`}>
          <List>
      {filteredOrderList.map((comm, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText>{comm.comment}</ListItemText>
          </ListItem>
          {index < filteredOrderList.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
          </div>
          </span>
          <span className='b'>
          <Button variant="contained" sx={{ backgroundColor: '#461607' }} onClick={handleButtonClick}>Ostavi komentar</Button>
          <div  hidden={!showAdditionalInput}>
            <br></br>
            
              <TextField  sx={{ backgroundColor: 'white' }} label="Komentar" variant="filled"  hidden={!showAdditionalInput} value={comm} onChange={(e) => setComm(e.target.value)}/>

              <br></br>
              <br></br>


              <Button variant="contained" sx={{ backgroundColor: '#461607' }} hidden={!showAdditionalInput} onClick={handleButtonClick2}>Potvrdi</Button>

              

       
        </div>
          </span>
        </div>
   

        </div>
      );
  };
  
  export default Details;