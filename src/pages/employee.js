import React,{useState} from 'react';
import HeadZ from "../components/headZ";
import '../background.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SelectVariants from '../components/dropd';

const Employee = () => {
  const orders = sessionStorage.getItem('ordersList');
  const [orderList, setOrderList] = React.useState(JSON.parse(orders) || []);
  const[name ,setName]=useState(null);
  const[price ,setPrice]=useState(null);
  const[about ,setAbout]=useState(null);
  const[ingredients ,setIngredients]=useState(null);
  const[image ,setImage]=useState(null);
  const[torta,setTorta]=useState(null);
  const dropdownOptions = [
    { value: 'n.jpg', label: 'Narandza torta' },
    { value: 'cake.jpg', label: 'Crna torta' },
    { value: 'jag.jfif', label: 'Jagoda mafin' },
  ];
  const handleDropdownSelect = (selected) => {
    setImage(selected.value);
    const s1 =selected.label.toLowerCase();
    const s2 = "torta";
    if (s1.includes(s2)) {
      setTorta("1");
   
    } else {
      setTorta("0");

    }
  };
  const handleSaving=()=>{

      const newImage ={
        name:name,
        src:image,
        about:about,
        price:price,
        ingredients:ingredients,
        torta:torta
      };
      const sessionImages = sessionStorage.getItem('images');
      const imageList = JSON.parse(sessionImages) || [];
      imageList.push(newImage);
      sessionStorage.setItem('images', JSON.stringify(imageList));
      alert("item added");
  };
  
  const handleAccept = (orderIndex) => {
    if (orderIndex !== -1) {
      const updatedOrderList = [...orderList];
      updatedOrderList[orderIndex].status = "accepted";
      sessionStorage.setItem('ordersList', JSON.stringify(updatedOrderList));
      setOrderList(updatedOrderList);
      alert(updatedOrderList[orderIndex].status)
    }
  };

  const handleReject = (orderIndex) => {
   
    if (orderIndex !== -1) {
      const updatedOrderList = [...orderList];
      updatedOrderList[orderIndex].status = "rejected";
      sessionStorage.setItem('ordersList', JSON.stringify(updatedOrderList));
      setOrderList(updatedOrderList);
      alert(updatedOrderList[orderIndex].status)
    }
  };
 const filteredOrderList = orderList.filter(orderItem => orderItem.status !== "accepted" && orderItem.status !== "rejected");

 return (
   <div className="login-page">
     <HeadZ />
     
     <div class="navk">
     <li>
            <Stack direction="column" spacing={5}>
            <div>
            <label>Naziv:</label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <label>Opis:</label>
            </div>
            </Stack>
            </li>

            <li>
            <Stack direction="column" spacing={4}>
            <div>
                <TextField    sx={{ backgroundColor: 'white' }}
label="Naziv" variant="filled" value={name} onChange={(e) => setName(e.target.value)}/>
                <br></br>
                <br></br>
                <TextField   sx={{ backgroundColor: 'white' }}
 label="opis" variant="filled" value={about} onChange={(e) => setAbout(e.target.value)} />
            </div>
            </Stack>
            </li>
            <li>
            <Stack direction="column" spacing={5}>
            <div>
            <label>Cena:</label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <label>Slika:</label>
            </div>
            </Stack>
            </li>

            <li>
            <Stack direction="column" spacing={4}>
            <div>
                <TextField   sx={{ backgroundColor: 'white' }}
  label="Cena" variant="filled" type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <br></br>
                <br></br>
  
            <SelectVariants
        options={dropdownOptions}
        onSelect={handleDropdownSelect}
      />
            </div>
            </Stack>
            </li>
            <li>
            <Stack direction="column" spacing={5}>
            <div>
            <label>Sastav:</label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>&nbsp;</span>
            </div>
            </Stack>
            </li>

            <li>
            <Stack direction="column" spacing={4}>
            <div>
                <TextField   sx={{ backgroundColor: 'white' }}
 label="Naziv" variant="filled" value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
                <br></br>
                <br></br>
                <Button variant="contained" sx={{ backgroundColor: 'black' }} onClick={()=>handleSaving()}>Unesi</Button>

            </div>
            </Stack>
            </li>


       
        </div>
        <div className={`lista ${filteredOrderList.length === 0 ? 'no-background' : '#F8F0F0'}`}>
        <List>
  {filteredOrderList.map((orderItem, index) => (
    <React.Fragment key={index}>
      <ListItem>
        <ListItemText>
          <strong>Korisnik:</strong> {orderItem.user}<br />
          <strong>Porudžbine:</strong>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ul>
          {orderItem.order.map((order, orderIndex) => (
            <li key={orderIndex}>
              {`Artikal: ${order.item}, Kolicina: ${order.quantity}, Cena: ${order.price}`}
            </li>
          ))}
        </ul>
      </ListItem>
      <ListItem>
        <Button onClick={() => handleAccept(index)}>
          Prihvati
        </Button>
        <Button onClick={() => handleReject(index)}>
          Odbij
        </Button>
      </ListItem>
      {index < filteredOrderList.length - 1 && <Divider />} {/* Add Divider except for the last item */}
    </React.Fragment>
  ))}
</List>
</div>
   </div>
 );
};

export default Employee;