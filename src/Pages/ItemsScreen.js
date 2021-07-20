import React from 'react';
import "./App.css";
import "./Register.css";
import StepIndicator from '../components/StepIndicator';
import { Link } from "react-router-dom";
import Card from '../components/card';
import CardPhoto from '../components/cardWithPhoto';
import Nokia from "./Nokia.webp";
import WordEditor from '../components/WordEditor';
function ItemsScreen() {
  return (
    <div className="mainDiv" >
            <div className="StepIndicatorBox">            
            
                    <h3 style={{
                                textAlign:"flex-start", 
                                color:"#053742",
                                display:"inline-block",
                                paddingLeft:"2%"
                            }}>Welcome Localshop, Let's get started!</h3>

                    <StepIndicator />
            
            </div>         
                <div style={{
                            borderWidth:2,
                            position:"realative",
                            display:"inline-block",
                            backgroundColor:"#fff",
                            borderColor:"#D8E3E7",
                            borderStyle:"solid", 
                            marginTop:"16.5%",
                            marginLeft:"9%",
                            marginRight:"9%",
                            borderRadius:2,
                            width:"80%",
                            flexDirection:"row",
                            padding:"1%"
                            }}>
                                
                            
                                <div style={{
                                           height:200,
                                           width:140,
                                           margin:"0.7%", 
                                           padding:0, 
                                           display:"inline-block", 
                                           borderRadius:5,
                                           border:"solid", 
                                           borderWidth:1, 
                                           borderColor:"#E1E8EB"}}>
                                     <div style={{
                                             height:140, 
                                             width:"100%",
                                             backgroundColor:"#D8E3E7", 
                                             display:"flex", 
                                             justifyContent:"center",
                                             alignItems:"center"}
                                            }>
                                          <div> 
                                            <p style={{textAlign:"center"}}>+</p>
                                            <p>Add items</p>
                                          </div>     
                                     </div>
                                     <div style={{height:60, width:"100%", display:"flex"}}></div>
                                </div>   
                           
                            <div style={{
                                        height:200,
                                        width:140,
                                        margin:"0.7%",
                                        position:"absolute",
                                        padding:0, 
                                        display:"inline-block", 
                                        borderRadius:5,
                                        border:"solid", 
                                        borderWidth:1, 
                                        borderColor:"#E1E8EB"}}>
                                    <div style={{
                                                height:140, 
                                                width:"100%",
                                                backgroundColor:"#D8E3E7", 
                                                display:"flex", 
                                                justifyContent:"center",
                                                alignItems:"center"}
                                                }>
                                        <div> 
                                            <img src={Nokia}  
                                                        alt="Nokia"
                                                        style={{height:140,width:140}}/>
                                        </div>     
                                    </div>
                                <div style={{height:60, width:"100%", display:"flex", justifyContent:"center", alignItems:"flex-end"}}>
                                    <p style={{fontSize:11}}>Nokia 336</p>
                                    <p style={{fontSize:8, color:"red"}}>$40</p>
                                </div>
                            </div>   
                            <CardPhoto />                  
                           <Card />  
                           <Card />
                           <Card />
                           <Card /> 
                           <Card /> 
                           <Card /> 
                           <Card />   
                           <Card /> 
                           <Card /> 
                           <Card /> 
                           <Card /> 
                           <Card /> 

                    <div>
                        <h5 style={{ color:"#053742"}}>Add New Listing </h5>
                        <p style={{fontWeight:700, fontSize:13}}>Product Details</p>
                        <p style={{fontSize:11, color:"grey", fontWeight:500}}>Provide detailed information about this product to inform our users</p>
                        <form>
                            <div style={{display:"flex", flexDirection:"row", flex:1, width:"100%"}}>
                                <div style={{marginRight:"25%"}}>
                                <p className="OptionsStyle" style={{fontSize:11, marginBottom:0, fontWeight:500, marginBottom:"2%"}}>Title</p>
                                <input type="text" name="name" placeholder="Toyota 18 Windsheild Wiper" style={{width:"260%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0, height:25}} />
                                </div>
                                <div style={{marginRight:"10%"}}>
                                <p className="OptionsStyle" style={{fontSize:11, marginBottom:0, fontWeight:500, marginBottom:"2%"}}>Brand</p>
                                <input type="text" name="name" placeholder="Goodyear" style={{width:"160%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0, height:25}} />
                                </div>
                                <div style={{marginRight:"10%"}}>
                                <p className="OptionsStyle" style={{fontSize:11, marginBottom:0, fontWeight:500, marginBottom:"2%"}}>Model #</p>
                                <input type="text" name="name" placeholder="WP34567-86" style={{width:"140%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0, height:25}} />
                                </div>
                            </div>         

                            <div style={{display:"flex", flexDirection:"row", flex:1, width:"100%"}}>
                                <div style={{marginRight:"10%"}}>
                                <p className="OptionsStyle" style={{fontSize:11, marginBottom:0, fontWeight:500,marginBottom:"2%"}}>Product Category</p>
                                <input type="text" name="name" placeholder="Automotive" style={{width:"150%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0, height:25}} />
                                </div>
                                <div style={{marginRight:"10%"}}>
                                <p className="OptionsStyle" style={{fontSize:11, marginBottom:0, fontWeight:500,marginBottom:"2%"}}>Product Sub-category</p>
                                <input type="text" name="name" placeholder="Wiper Blades" style={{width:"140%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0, height:25}} />
                                </div>
                                <div style={{marginRight:"10%"}}>
                                <p className="OptionsStyle" style={{fontSize:11, marginBottom:0, fontWeight:500,marginBottom:"2%"}}>Price</p>
                                <input type="text" name="name" placeholder="$60" style={{width:"130%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0, height:25}} />
                                </div>
                                <div style={{marginRight:"10%"}}>
                                <p className="OptionsStyle" style={{fontSize:11, marginBottom:0, fontWeight:500,marginBottom:"2%"}}>Compare at price</p>
                                <input type="text" name="name" placeholder="$160" style={{width:"120%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0, height:25}} />
                                </div>
                            </div>                    
                        </form>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end", marginRight:"20%"}}>
                            <input type="checkbox" style={{height:35, borderWidth:5}}/> 
                            <p className="OptionsStyle" style={{fontSize:11, marginBottom:0,marginLeft:"1%"}}>This Product is tax exempt</p>
                        </div>                        
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start"}}>
                        <WordEditor />
                        <div style={{marginLeft:"1%"}}>
                        <p className="OptionsStyle" style={{fontSize:11, marginBottom:0, fontWeight:500, marginBottom:"4%"}}>Images</p>
                        <div style={{display:"flex", height:"85%", width:"1450%", border:"solid", borderWidth:1,borderRadius:5, position:"relative", marginTop:"8px"}}></div>
                        </div>
                    </div>
                    <div style={{paddingTop:"5%"}}>
                        <p style={{fontWeight:700, fontSize:13}}>Inventry Store Listing</p>
                        <p style={{fontWeight:500, fontSize:10}}>This information helps you to manage the storage Inventry</p>

                        <div style={{display:"flex"}}>
                            <div>

                            </div>

                        </div>                            
                    </div>
                </div>
                
                
                <Link to="/items"> 
                    <div style={{display:"flex",justifyContent:"flex-end", marginRight:"10%", marginTop:"0.5%", marginBottom:"0.5%"}}>  
                        <button style={{backgroundColor:"#053742",paddingTop:10, paddingBottom:10, color:"#fff", fontWeight:600, width:"10%", fontSize:12}}>Save & Continue</button>
                    </div>  
                </Link>        
         </div>
    </div>
    
  );
}

export default ItemsScreen;
