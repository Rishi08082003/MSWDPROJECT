import React from 'react'
import {Form,Button} from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import { useState } from "react";
import axios from 'axios';
function Mobile() {  
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
       axios.post("http://localhost:3001/create",newStock)
        }
    return(
        <div>
            <h1><b>WELCOME TO STOCK MANAGEMENT SYSTEM </b> </h1>
            
           <Form onSubmit={add}>
          <div className='input'>
           <Form.Group className="mb-3" controlId="formBasicStockName">         
        <Form.Label><b>STOCK</b></Form.Label>
        <Form.Control type="text" placeholder="Enter StockName" name="Stock_name" />       
      </Form.Group>
      </div>
      <div className='input '>
      <Form.Group className="mb-3" controlId="formBasicStockname">
        <Form.Label><b>SHARE</b></Form.Label>
        <Form.Control type="text" placeholder="Enter amount of Share in percentage" name="per"/>
      </Form.Group>
      </div>
      <div className='input'>
      <Form.Group className="mb-3" controlId="formBasicStockname">
        <Form.Label><b>PRICE</b></Form.Label>
        <Form.Control type="text" placeholder="Enter StockPrice" name="price" />       
      </Form.Group>
      </div>
      <div className='input'>
      <Button variant="primary" type="submit">
        ADD TO AVAILABLE STOCKS
      </Button>
      </div>
           </Form>
           <div className='input'>

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
        </div>
    )
}
export default Mobile