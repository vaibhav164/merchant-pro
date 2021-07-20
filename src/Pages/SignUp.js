import React from "react";
import BgImg from "../img/hello.png";
import { Link } from "react-router-dom";
const SignUp=()=>{
    return(
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
              <div style={{flexDirection:"column", 
                            display:"flex", 
                            justifyContent:"space-between", 
                            position:"relative" ,
                            top:"20%",
                            left:"10%", 
                            width:"70%"
                          }}>

                <h2 style={{textAlign:"center"}}>Launch Your Local online Store in minutes and reach millions of new buyers</h2>
                
                <div style={{display:"flex",
                            flexDirection:"column",
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
                            padding:40

                            }}>
                        <div  style={{paddingTop:10}}>
                              <input placeholder="Your email Address" style={{padding:10, borderRadius:10, borderWidth:"1px", marginBottom:10,width:300}}/>
                        </div> 
                        <div style={{paddingTop:10}}>
                              <input placeholder="Create password (6-12 characters)" style={{padding:10, borderRadius:10, borderWidth:"1px", marginBottom:10,width:300}}/>
                        </div> 
                        <div style={{paddingTop:10}}>
                              <input placeholder="BuyShop" style={{padding:10, borderRadius:10, borderWidth:"1px", marginBottom:10, width:300}}/>
                        </div>   
                        
                        <div>
                            <Link to="/sarvesh">
                                <button style={{backgroundColor:"#053742", padding:10, borderRadius:10, color:"#fff", fontWeight:"bold", width:300, fontSize:"15px"}}>Create your ShopKlip Store</button>
                             </Link>
                        </div>
                        {/* <input placeholder="User Name" style={{padding:10, borderRadius:10, borderWidth:"1px", marginBottom:10}}/>
                        <input placeholder="User Name" style={{padding:10, borderRadius:10, borderWidth:"1px", marginBottom:10}}/> */}
                    
                    
                </div>
            </div>
          
          </div>
    );
}
export default SignUp;