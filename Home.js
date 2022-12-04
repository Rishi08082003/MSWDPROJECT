import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import stock from './images/con.jpg.jpg';
import stocks from './images/2.1.jpg';
const hStyle1 = { color: 'blue' };
const hStyle2 = { color: 'green' };
const hStyle3 = { color: 'red' };
const Home = () => {
return (
	<div  >
	<section className="section">
      <div className="container">
    <div className="row">
<div className="col-mid-12 text-centre">
  <h1 className="primary" style={hStyle2}>FEEDBACK-MANAGEMENT</h1> 
</div> </div></div></section>
<img src={stock} alt="STOCK MANAGEMENT"/><h style={hStyle3}>--LEADS EVERY COMPANY-- TO</h><img src={stocks} alt="STOCK MANAGEMENT"/>
        <h1 style={hStyle1}>
            <b >
                WHAT IS STOCK?
            </b>
        </h1>
        <p  >
          <i>
          
        In finance, stock (also capital stock) consists of all of the shares into which ownership of a corporation or company is divided. 
        
        </i>
        </p>
        <h1 style={hStyle1} >
          What is Stock management system?
        </h1>
        <p>
        ‍Stock/Inventory management software is basically a computer based system which is primarily used for the purpose of tracking inventory levels, sales, deliveries and the orders. By this process we can effectively oversee the constant flow of the units into and out of a currently existing inventory.
        </p>
        <h1 style={hStyle1}>
          <b>
            What is the importance of the stock management system?
          </b>
        </h1>
        <p>
           An inventory management system is important for companies with large amounts of inventory in order to keep it at optimal levels.
        </p>
        <h1 style={hStyle3}>
          <b >
            About our project:
          </b>
        </h1>
        <p>
        A stock exchange, securities exchange, or bourse is a facility where stockbrokers 
and traders can buy and sell securities, such as shares of stock, bonds, and other financial 
instruments. Stock exchanges may also provide facilities for the issue and redemption of 
Page | 7 
such securities and instruments and capital events including the payment of income and 
dividends. Securities traded on a stock exchange include stock issued by listed 
companies, unit trusts, derivatives, pooled investment products and bonds. Stock 
exchanges often function as "continuous auction" markets with buyers and sellers 
consummating transactions via open outcry at a central location such as the floor of the 
exchange or by using an electronic trading platform. 
Stock Market Management system is to manage investment activities of any 
organization. Investment in stock market provides major source of income and intelligent 
decision at right time is the success key. Stock analyser is capable to provide all necessary 
analysis for right decision. 

        </p>
        <h1 style={hStyle2}><b>IF YOUR INTRESTED TO JOIN US YOU CAN CONTACT US:-</b></h1>
        <h1 style={hStyle1}><b> <Link to= "/Contact" className="btn btn-warning shadow"><button>CONTACTUS</button></Link></b></h1><h1 style={hStyle1}><b><Link to= "/abouts" className="btn btn-warning shadow"><button>READMORE</button></Link></b></h1>
	   
    </div>
);
};

export default Home;
