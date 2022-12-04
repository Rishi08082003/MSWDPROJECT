import {useState} from 'react';
import axios from 'axios';

function CreateNote(){
    const[input, setInput]=useState({
       title1:"",
       title2:"",
       title3:"" 
    })
   
    function handleChange(event){
const {name,value}=event.target;
setInput(prevInput=>{
    return{
        ...prevInput,
        [name]:value
    }
})
    }
    function handleClick(event){
        event.preventDefault();
        const newNote ={
            title1:input.title1,
            title2:input.title2,
            title3:input.title3
        }
        axios.post("http://localhost:3001/create",newNote)
    }
    
return(
    <div className='container'>
        <h1>ADD STOCKS </h1>
<form>
    <div className='form-group'>
        <input onChange={handleChange} name='title1' value={input.title1} autoComplete="off" className='form-control' placeholder='ENTER STOCK NAME'></input>
        <input onChange={handleChange} name='title2' value={input.title2} autoComplete="off" className='form-control' placeholder='ENTER STOCK PRICE'></input>
        <input onChange={handleChange} name='title3' value={input.title3} autoComplete="off" className='form-control' placeholder='ENTER STOCK SHARE'></input>
    </div>
    
    <button onClick={handleClick}className='btn-btn-lg btn-info'>ADDSTOCK</button>
</form>
    </div>
)
}
export default CreateNote;