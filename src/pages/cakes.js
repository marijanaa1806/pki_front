
import '../background.css'
import Head from "../components/head";
import PaginationRounded from '../components/paginate';
import ColorTabs from '../components/tabs';
import { useState,useEffect } from 'react';
const Cakes = () => {
  const [images1,setImages1]=useState([]);
  const [images2,setImages2]=useState([]);
  useEffect(() => {
    const sessionImages = sessionStorage.getItem('images');
    const imageList = JSON.parse(sessionImages) || [];
    const imageListString = JSON.stringify(imageList, null, 2);
    const tortaImages = imageList.filter((image) => image.torta === "1");
    const kolaciImages = imageList.filter((image) => image.torta === "0");
    setImages1(slideImages.concat(tortaImages));
    setImages2(slideImages2.concat(kolaciImages));

  }, []);

  const slideImages = [
    { name: 'Srce torta', src: 't1.jfif',about:'pravi se lalala', price:'250',ingredients:'jaja, secer, voda, brasno',torta:1 },
    { name: 'Cheesecake', src: 'cheesecake.jpg',about:'pravi se lalala', price:'250',ingredients:'jaja, secer, voda, brasno',torta:1 },
    { name: 'Vocna torta', src: 't2.jfif',about:'pravi se lalala', price:'250',ingredients:'jaja, secer, voda, brasno',torta:1 },
    { name: 'Borovnica torta', src: 't3.jfif',about:'pravi se lalala', price:'250',ingredients:'jaja, secer, voda, brasno',torta:1 },
    { name: 'Zelena torta', src: 't2.jfif' ,about:'pravi se lalala', price:'250',ingredients:'jaja, secer, voda, brasno',torta:1},
    { name: 'Bela torta', src: 't4.jfif',about:'pravi se lalala', price:'250',ingredients:'jaja, secer, voda, brasno' ,torta:1},
  ];
  const slideImages2 = [
    { name: 'Cokoladni mafin', src: "cc.jpg",about:'pravi se lalala', price:'250',ingredients:'jaja, secer, voda, brasno',torta:0 },
    { name: 'Sareni mafin', src:  "ck.jpg",about:'pravi se lalala', price:'250',ingredients:'jaja, secer, voda, brasno',torta:0 },
    { name: 'Plavi mafin', src: "cd.jfif",about:'pravi se lalala', price:'250',ingredients:'jaja, secer, voda, brasno',torta:0 },
    { name: 'Plavo beli mafin', src: "kolaci.jpg",about:'pravi se lalala', price:'250',ingredients:'jaja, secer, voda, brasno',torta:0 },
    { name: 'Jagoda mafin', src: 'jag.jfif' ,about:'pravi se lalala', price:'250',ingredients:'jaja, secer, voda, brasno',torta:0},
    { name: 'Roze plavi mafini', src: "ck.jpg",about:'pravi se lalala', price:'250',ingredients:'jaja, secer, voda, brasno',torta:0 },
    
    ];
    const [selectedTab, setSelectedTab] = useState('set1'); 

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
    return (
      <div className="login-page">
        <Head></Head>
      <ColorTabs value={selectedTab} onChange={handleTabChange} />

      {selectedTab === 'set1' && (
        <PaginationRounded itemsPerPage={3} items={images1} />
      )}

      {selectedTab === 'set2' && (
        <PaginationRounded itemsPerPage={3} items={images2} />
      )}

    </div>
      );
  };
  
  export default Cakes;