
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
    const tortaImages = imageList.filter((image) => image.torta === "1");
    const kolaciImages = imageList.filter((image) => image.torta === "0");
    setImages1(slideImages.concat(tortaImages));
    setImages2(slideImages2.concat(kolaciImages));

  }, []);

  const slideImages = [
    { name: 'Srce torta', src: 't1.jfif',about:'Ova divna torta od jagoda je napravljena mešanjem svežih jagoda u sočno testo, stvarajući nalet voćne dobrote sa svakim zalogajem.', price:'250',ingredients:'jaja, secer, voda, brasno,i naravno, sočne jagode.',torta:1 },
    { name: 'Cheesecake', src: 'cheesecake.jpg',about:' Prepustite se kremastoj eleganciji našeg kolača od sira, gde se mešavina krem sira, jaja i šećera delikatno peče do savršenstva, stvarajući nebeski desert koji se topi u ustima.', price:'250',ingredients:'jaja, secer, voda, brasno, krem sir,maline.',torta:1 },
    { name: 'Voćna torta', src: 't2.jfif',about: 'Doživite žarki ples ukusa uz našu tortu od limete i kivija. Oštre note limete i tropske slatkoće kivija spajaju se u harmoničnu fuziju, čineći svaku krišku osvežavajućim užitkom.', price:'250',ingredients:'jaja, secer, voda, brasno,limeta,kivi',torta:1 },
    { name: 'Borovnica torta', src: 't3.jfif',about:'Uronite u slatku simfoniju borovnica u svakom sloju ove torte. Prasak dobrote borovnice isprepleten je sa vlažnom i mekanom teksturom za odličnu poslasticu.', price:'250',ingredients:'jaja, secer, voda, brasno,borovnice',torta:1 },
    { name: 'Čokolada torta', src: 'choko.jpeg' ,about:'Prepustite se dekadenciji naše čokoladne torte. Bogat kakao u kombinaciji sa baršunastim testom stvara vlažan i ugodan doživljaj, čineći ga istinskim slavljem za ljubitelje čokolade.', price:'250',ingredients:'jaja, secer, voda, brasno,cokolada',torta:1},
    { name: 'Bela torta', src: 't4.jfif',about:'Prihvatite jednostavnost i eleganciju naše bele torte. Delikatna mešavina sastojaka daje laganu i mekanu teksturu, pružajući platno za vaš izbor glazura ili preliva.', price:'250',ingredients:'jaja, secer, voda, brasno' ,torta:1}

  ];
  const slideImages2 = [
    { name: 'Čokoladni mafin', src: "cc.jpg",about:'Ovaj čokoladni mafin osvaja svojom bogatom čokoladnom notom i mekanom teksturom. Savršen je za ljubitelje čokolade koji žele uživati u ukusnom zalogaju.', price:'250',ingredients:'jaja, secer, voda, brasno',torta:0 },
    { name: 'Šareni mafin', src:  "ck.jpg",about:'Šareni mafin donosi radost boja i ukusa. Svaki zalogaj je šareno iskustvo, savršeno za sve koji vole veselje i raznolikost', price:'150',ingredients:'jaja, secer, voda, brasno',torta:0 },
    { name: 'Plavi mafin', src: "cd.jfif",about:' Plavi mafin osvaja svojom jednostavnošću i ukusom. Savršen je izbor za one koji vole klasične arome i sočnost.', price:'370',ingredients:'jaja, secer, voda, brasno',torta:0 },
    { name: 'Plavo beli mafin', src: "kolaci.jpg",about:'Ovaj mafin kombinuje harmoniju plave i bele boje s ukusom koji oduševljava. Jedinstveni spoj vizualnog užitka i fantastičnog ukusa.', price:'300',ingredients:'jaja, secer, voda, brasno',torta:0 },
    { name: 'Jagoda mafin', src: 'jag.jfif' ,about:'Jagoda mafin donosi svežinu jagoda u svaki zalogaj. Sočnost ovog mafina čini ga savršenim desertom za sve ljubitelje voćnih poslastica.', price:'195',ingredients:'jaja, secer, voda, brasno',torta:0},
    { name: 'Roze plavi mafini', src: "ck.jpg",about:'Roze plavi mafini spoj su nežnosti roze boje i osvežavajućeg ukusa. Idealan izbor za posebne trenutke i sladokusce koji vole neobične kombinacije.', price:'400',ingredients:'jaja, secer, voda, brasno',torta:0 },
    
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