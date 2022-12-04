import React from 'react';
import stocks from './images/qr.jpg';
const hStyle1 = { color: 'blue' };
const hStyle2 = { color: 'red' };
const abouts = () => {
return (
	<div>
	<h1 style={hStyle2}><b>WELCOME TO TEAM 13 :</b></h1>
    <h1 style={hStyle1}>AS YOU ARE WILLING TO BUY OUR MEMEBER SHIP :</h1>
    <h1>THERE ARE TWO METHODS</h1>
    <h1>1.YOU HAVE TO SEND MONEY TO THE MOBILE NUMBER:6281433341,SCREEN SHOT</h1>
    <h1>2.SCAN THE QR CODE:</h1>
    <img src={stocks} alt="STOCK MANAGEMENT" width='300' height='400'/>

	</div>
);
};

export default abouts;