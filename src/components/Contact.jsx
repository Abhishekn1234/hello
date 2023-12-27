
import Card from 'antd/es/card/Card';
import Input from 'antd/es/input/Input';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
  return (
   
    <div>
       <br/><br/><br/><br/>
      
      <Card>
       
          <h1 style={{textAlign:"center"}}>
          Contact Details </h1>
         
         
          <label>Name:</label>
        <Input type='text' placeholder='Enter your Name' required>

        </Input>
        <label>Address:</label>
        <TextArea placeholder='Enter your address' cols={"5"} required></TextArea>
        <label>Email:</label>
        <Input type="email" placeholder='Enter your Email address' required/>
        <ContactForm/>
        
      </Card>
    </div>
  );
}

export default Contact;
