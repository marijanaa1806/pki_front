
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
          <div className='navk'>
            <ul>
              <li>
              <img src={pictureObject.src} width={230} height={250}></img>
              </li>
              <li>
                <div>
                  <h2>{pictureObject.name}</h2>
                

          <label>{pictureObject.about}</label>
          <br>
          </br>
          <br>
          </br>
          <label>{pictureObject.ingredients}</label>
          <br>
          </br>
          <br>
          </br>
          <label>{pictureObject.price} din</label>
         

                </div>
              </li>
              <li>
              <label>Unesi kolicinu:</label>
              <br></br>
              <br></br>

          <div className='order'>
          <TextField  sx={{ backgroundColor: 'white' }} label="Kolicina" variant="filled" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <br></br>
          <br></br>

          <Button variant="contained" onClick={handleOrder} sx={{ backgroundColor: 'black' }}> Dodaj </Button>
    <br></br>
          </div>
              </li>
            </ul>

          </div>
         
       
          <br></br>
          <div className='lista'>
          <List>
      {filteredOrderList.map((comm, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText>{comm.comment}</ListItemText>
          </ListItem>
          {index < filteredOrderList.length - 1 && <Divider />} {/* Add Divider except for the last item */}
        </React.Fragment>
      ))}
    </List>
          </div>
          
           <div>
          </div>
          <div className='navk'>
            <ul>
              <li>
              <div  hidden={!showAdditionalInput}>
          <TextField  sx={{ backgroundColor: 'white' }} label="Komentar" variant="filled"  hidden={!showAdditionalInput} value={comm} onChange={(e) => setComm(e.target.value)}/>
          
       
        </div>
              </li>
              <li>
              <Button variant="contained" sx={{ backgroundColor: 'black' }} onClick={handleButtonClick}>Ostavi komentar</Button>
              <div>
        
              
              <div hidden={!showAdditionalInput}>
     
              <Button variant="contained" sx={{ backgroundColor: 'black' }} hidden={!showAdditionalInput} onClick={handleButtonClick2}>Potvrdi</Button>
      
    </div>
        </div>
              </li>
            </ul>

          
     
     

    </div>

        </div>
      );
  };
  
  export default Details;