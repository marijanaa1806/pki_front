
import '../background.css'
import Head from "../components/head";
const Contact = () => {
    
    return (
        <div className="login-page">
          <Head />
          {}
          <div>
            <ul>
                <li>
                <label style={{
      fontSize:'20px', 
    }}>Lokacija</label>
            <br></br>
            <label>Bulevar Kralja Aleksandra 65</label>
                </li>
                <li>
                <label style={{
      fontSize:'20px', 
    }}>Radno vreme</label>
            <br></br>
            <label>9-17h</label>
                </li>
                <li>
                <label style={{
      fontSize:'20px', 
    }}>Telefon</label>
            <br></br>
            <label> 011 41 55 555</label>
                </li>
                <li>
                <label style={{
      fontSize:'20px', 
    }}>E-mail</label>
            <br></br>
            <label> slatkisi@gmail.com</label>
                </li>
            </ul>
           
          </div>
        </div>
      );
  };
  
  export default Contact;