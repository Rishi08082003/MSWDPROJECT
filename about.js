import React from "react";
import './App.css';
import sec1 from './images/4.jpg';
import sec2 from './images/7.jpg';
import sec3 from './images/6.jpg';
import sec4 from './images/p1.jpg';
import sec5 from './images/p2.jpg';
import sec6 from './images/p3.jpg';
const About = () => {
return (
	<div className="pri">
    
	<h1 className="primary">STOCK MANAGEMENT SYSTEM(TEAM 13)</h1>
  <img y src={sec4} alt="rishi"/><img src={sec5} alt="VAMSI"/><img src={sec6} alt="prudhvi"/>
        <table className="pri2">
  <tr styles={{width: '50%'}} >
    <th styles={{width: '50%'}}>NAME</th>
    <th styles={{width: '50%'}}>ID</th>
    <th styles={{width: '50%'}}>Contact</th>
    <th styles={{width: '50%'}}>Email Id</th>
    <th styles={{width: '50%'}}>contribution</th>
    <th styles={{width: '50%'}}>IMAGE</th>
  </tr>
   <tr styles={{width: '50%'}}>
    <td styles={{width: '50%'}}>P.VAMSI</td>
    <td styles={{width: '50%'}}>2100030574</td>
    <td styles={{width: '50%'}}>9398117958</td>
    <td styles={{width: '50%'}}>2100030574@kluniversity.in</td>
    <td styles={{width: '50%'}}>IDEA ABOUT DEVOLOPMENT OF PROJECT,MODULE DESIGNER</td>
    <td styles={{width: '50%'}}><img width='270' src={sec2} alt="VAMSI"/></td>
    
  </tr>
  <tr styles={{width: '50%'}}>
    <td styles={{width: '50%'}}>V.RISHI</td>
    <td styles={{width: '50%'}}>21000030577</td>
    <td styles={{width: '50%'}}>6281433341</td>
    <td styles={{width: '50%'}}>2100030577@kluniversity.in</td>
    <td styles={{width: '50%'}}>FRONT END DEVOLOPMENT,ALL MODULE DESIGNER,LEAD</td>
    <td styles={{width: '50%'}}><img width='270' src={sec1} alt="RISHI"/></td>
  </tr>
  <tr styles={{width: '50%'}}>
    <td styles={{width: '50%'}}>PRUDHVI</td>
    <td styles={{width: '50%'}}>2100030655</td>
    <td styles={{width: '50%'}}>8247763646</td>
    <td styles={{width: '50%'}}>2100030655@kluniversity.in</td>
    <td styles={{width: '50%'}}>PROVIDED ROUTH PATH OR DIRECTION IN THE SYSTEM</td>
    <td styles={{width: '50%'}}><img width='270' src={sec3} alt="PRUDHVI"/></td>
  </tr>
</table>
	</div>
);
};

export default About;
