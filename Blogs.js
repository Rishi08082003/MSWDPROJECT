import React from 'react'
import './App.css';
import {Form,Button} from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import { useState } from "react";
import axios from "axios";
function Blogs() {  
  let initialValue=[];
  const[Products,setProducts]=useState(initialValue);
  const add =(event)=>{
    
    
        event.preventDefault();
       // console.log(event.target.per.value);
        const formdata=event.target;
        const newStock={

           Stockname:formdata.Stock_name.value,
        StockShare:formdata.per.value,
         StockPrice:formdata.price.value
       }
       
      
       //console.log(newStock);
       //updating to array
       setProducts([...Products,newStock]);
       console.log(Products);
       axios.post('http://localhost:3001/create',newStock)
      
       
        }
    return(
        <div className='pri3'>
            <h1 className='primary'><b>WELCOME TO STOCK MANAGEMENT SYSTEM </b> </h1>
            
           <Form onSubmit={add}>
           <Form.Group className="mb-3" controlId="formBasicStockName">
        <Form.Label><b>STOCK</b></Form.Label>
        <Form.Control type="text" placeholder="Enter StockName" name="Stock_name"/>       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicStockname">
        <Form.Label><b>SHARE</b></Form.Label>
        <Form.Control type="text" placeholder="Enter amount of Share in percentage" name="per"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicStockname">
        <Form.Label><b>PRICE</b></Form.Label>
        <Form.Control type="text" placeholder="Enter StockPrice" name="price" />       
      </Form.Group>
      <Button variant="primary" type="submit">
        ADD TO AVAILABLE STOCKS
      </Button>
           </Form>
           <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th><b>INDEX</b> </th>
          <th><b>Stock_NAME  </b> </th>
          <th><b>Stock_SHARE </b> </th>
          <th><b>Stock_PRICE </b> </th>
        </tr>
      </thead>
      <tbody>{
        Products.map((item,index)=>{
             return( <tr key={index}>
                <td>{index}</td>
               
                <td>{item.Stockname}</td>
                <td>{item.StockShare}</td>
                <td>{item.StockPrice}</td>
              </tr>
             )
        })
        
        }
      </tbody>
    </Table>
        </div>
    )
}
export default Blogs