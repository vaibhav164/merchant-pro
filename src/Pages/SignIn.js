import React from 'react';
import BgImg from "../img/hello.png";
import "./App.css";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div style={{
      backgroundImage: `url(${BgImg})`,
      height:"100vh",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      backgroundSize:"100% 100%",
      justifyContent:"center",
      alignItems:"center",
      position:"relative"
    }}>
        
      <div style={{display:"flex",flexDirection:"column",
                      position:"relative",
                      top:"30%",
                      width:"50%",
                      left:"25%",
                      borderWidth:"2px", 
                      justifyContent:'space-between', 
                      alignItems:"center",
                      backgroundColor:"#ffffff5c",
                      borderRadius:15,
                      textAlign:"center",
                      padding:10
                  }}>
          <h2 style={{textAlign:"center"}}>Sign in to your store</h2>
          <div style={{flexDirection:"column", display:"flex", justifyContent:"space-between"}}>
               <div  style={{paddingTop:10}}>
                    <input placeholder="Your email Address" style={{padding:10, borderRadius:10, borderWidth:"1px", marginBottom:10,width:"100%"}}/>
               </div> 
               <div style={{paddingTop:10}}>
                    <input placeholder="Create password (6-12 characters)" style={{padding:10, borderRadius:10, borderWidth:"1px",width:"100%"}}/>
                    <text style={{color:"#053742", justifySelf:"flex-start", fontSize:10}}>Forgot password ?</text>
               </div> 
               <div>
                   
               </div>   
              
              <div style={{paddingTop:10, paddingLeft:15, bottom:20}}>
              <Link to="/register">
                  <button style={{backgroundColor:"#053742",paddingTop:10, paddingBottom:10,  borderRadius:10, color:"#fff", fontWeight:10, width:320}}>Sign in</button>
                </Link>
              </div>
              {/* <input placeholder="User Name" style={{padding:10, borderRadius:10, borderWidth:"1px", marginBottom:10}}/>
              <input placeholder="User Name" style={{padding:10, borderRadius:10, borderWidth:"1px", marginBottom:10}}/> */}
          </div>
          
      </div>
    
    </div>
  );
}


export default SignIn;

