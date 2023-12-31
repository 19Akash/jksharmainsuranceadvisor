import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Grid} from '@mui/material';
import "./contact.css";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader/Loader";

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm('service_9cbhc3k', 'template_rkhkp7a', form.current, "g6I1iKyEEXaccUJML")
      .then((result) => {
          setIsLoading(false);
          alert("Message sent")
          setName("");
          setMobile("");
          setEmail("");
          setText("");
      }, (error) => {
          setIsLoading(false);
          alert(error.text)
      });
  };

  const handleChange = (e) =>{
      if(e.target.name ==="from_name"){
        setName(e.target.value);
      }
      else if(e.target.name ==="from_mobile"){
        setMobile(e.target.value);
      }
      else if(e.target.name ==="from_email"){
        setEmail(e.target.value);
      }
      else {
        setText(e.target.value);
      }
  }

  const handleSubmit = (e) =>{
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(name === "" || mobile === "" || email === "" || text === ""){
        alert("Please enter all details")
      }
      else if (mobile.toString().length!==10){
        alert("Please enter valid mobile number");
      }
      else if(!email.match(validRegex)){
        alert("Please enter valid email address");
      }
      else{
        sendEmail(e);
      }
  }
  
  return (
    <div style={{border: "4px solid white", margin:"5%", padding:"2%", borderRadius:"10px",  boxShadow: "2px 2px 10px 10px rgb(233, 218, 218)"}}>
        <div className='title'>Contact Us</div>
        <div className='title'>If you have any queries or need assistance regarding LIC insurance, 
        kindly share your details, and our team will promptly reach out to you. Alternatively, 
        you can directly contact us using the information provided below. 
        We're here to assist you.</div>
        <div className='title'>यदि आपके पास LIC बीमा से संबंधित कोई प्रश्न हो या सहायता की आवश्यकता हो, 
        कृपया अपना विवरण साझा करें, और हमारी टीम शीघ्र ही आपसे संपर्क करेगी। वैकल्पिक रूप से, 
        आप नीचे दी गई जानकारी का उपयोग करके सीधे हमसे संपर्क कर सकते हैं। 
        हम आपकी सहायता के लिए यहाँ हैं।
        </div>
        { isLoading 
        ? <Loader/> 
        :<form ref={form} onSubmit={(e)=>handleSubmit(e)}>
            <Grid container style={{display:"flex", justifyContent:"center", padding:"2%"}}>
                <Grid item xs={9} md={9} style={{ marginBottom: "40px", marginRight:"1%" }}>
                    <TextField 
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined" 
                    placeholder='Name' 
                    type="text" 
                    name="from_name" 
                    value={name} 
                    onChange={(e)=>handleChange(e)}
                    style={{ color: "rgb(66, 165, 245)" }}
                    fullWidth
                    />
                </Grid>
                <Grid item xs={9} md={9} style={{ marginBottom: "40px", marginRight:"1%" }}>
                    <TextField 
                    id="outlined-basic" 
                    label="Mobile" 
                    variant="outlined" 
                    placeholder='Mobile' 
                    type="number" 
                    name="from_mobile" 
                    value={mobile} 
                    onChange={(e)=>handleChange(e)}
                    style={{ color: "rgb(66, 165, 245)" }}
                    fullWidth
                    />
                </Grid>
                <Grid item xs={9} md={9} style={{ marginBottom: "40px", marginRight:"1%" }}>
                    <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    placeholder='Email' 
                    type="text" 
                    name="from_email" 
                    value={email} 
                    onChange={(e)=>handleChange(e)}
                    style={{ color: "rgb(66, 165, 245)" }}
                    fullWidth
                    />
                </Grid>
                <Grid item xs={9} md={9} style={{ marginBottom: "40px", marginRight:"1%" }}>
                <TextField 
                    id="outlined-basic" 
                    label="Message" 
                    multiline
                    variant="outlined" 
                    placeholder='Message' 
                    type="text" 
                    name="message" 
                    value={text} 
                    rows={6}
                    maxRows={8}
                    onChange={(e)=>handleChange(e)}
                    style={{ color: "rgb(66, 165, 245)" }}
                    fullWidth
                    />
                </Grid>
            </Grid>
            <div style={{width:"100%", textAlign:"center"}}>
               <button className='contactButton' type="submit" value="Send">Send</button>
            </div>
        </form>
        }
    </div>
  );
};

export default Contact;