import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();
  const image=()=>{
      navigate('/dashboard')
  }
  const logout=()=>{
    navigate('/register');
  }
  return (
    
    <div>
      
      
     <nav className='navbar navbar-inverse expand-xl bg-dark'>
     <div className='container-fluid-xl' style={{width:"100%"}}>
     
      <img src="https://www.freepnglogos.com/uploads/plus-icon/practice-index-plus-practice-management-blog-29.png" alt="s" style={{width:"7%"}} onClick={image}/>
      
      
       <Link to="/departments" style={{margin:"20px"}}> Department</Link>
      
       
        
       
        <Link to="/Settings" style={{margin:"20px"}}>Settings</Link>
        <Link to="/Services" style={{margin:"20px"}}>Services</Link>
        <Link to="/about" style={{margin:"20px"}}>About</Link>
        <Link to="/products" style={{margin:"20px"}}>Products</Link>
        <Link to="/contact" style={{margin:"20px"}}>Contact Us</Link>
          
        
          <button onClick={logout}>Log out
                    
                    </button>
              
       
      
       
         
      
        </div>
     </nav>
     </div>
     
    
  );
}

export default Home;
