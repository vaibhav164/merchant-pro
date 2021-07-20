import React from 'react';
import "./App.css";
import "./Register.css";
import StepIndicator from '../components/StepIndicator';
import RadioButton from '../components/RadioButton';
import Line from '../components/Line';
import Form from '../components/Form';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function RejisterScreen() {
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
                        <h3>About Store</h3>
            
            </div>         
                <div style={{
                            borderWidth:2,
                            position:"realative",
                            display:"inline-block",
                            backgroundColor:"#fff",
                            borderColor:"#D8E3E7",
                            borderStyle:"solid", 
                            marginTop:"16.5%",
                            marginLeft:"10%",
                            marginRight:"10%",
                            borderRadius:2,
                            width:"80%",
                            flexDirection:"row",
                            padding:"1%"
                            }}>
                                <div>
                                    <div style={{display:"inline-block", 
                                                width:"45%", 
                                                position:"absolute", 
                                                margin:0,
                                                padding:0 
                                                }}>
                                                <h5>What describes you as a store owner?</h5>
                                    </div>
                                    <div style={{display:"inline-block", 
                                                width:"50%",
                                                position:"relative",
                                                marginLeft:"50%",
                                                marginBottom:0,
                                                paddingTop:0,
                                                }}>
                                                            
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}I am a full-time seller without any online presence</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}I am a full-time seller with an existing online store</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}I am a part-time seller without any online presence</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}I am a part-time seller with an existing online store</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}I am  not selling anything yet</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}I am just exploring</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}Other</p>
                                               
                                    </div>
                                   <Line/>
                                </div>
                                <div>
                                    <div style={{display:"inline-block", 
                                                width:"45%", 
                                                position:"absolute", 
                                                margin:0,
                                                padding:0 
                                                }}>
                                                <h5>What is your current anual revenue?</h5>
                                    </div>
                                    <div style={{display:"inline-block", 
                                                width:"50%",
                                                position:"relative",
                                                marginLeft:"50%",
                                                marginBottom:0,
                                                paddingTop:0,
                                                }}>
                                                            
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}$0 (haven't started yet</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}Up to $10,000</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}$10,000 to $50,000</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}$50,000 to $1,50,000</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}$1,50,000 to $500,000</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}Above $500,000</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}Prefer not to disclose</p>
                                    </div>
                                    <Line />
                                </div>
                                <div>
                                    <div style={{display:"inline-block", 
                                                width:"45%", 
                                                position:"absolute", 
                                                margin:0,
                                                padding:0 
                                                }}>
                                                <h5>How would you categorize your store?</h5>
                                    </div>
                                    <div style={{display:"inline-block", 
                                                width:"50%",
                                                position:"relative",
                                                marginLeft:"50%",
                                                marginBottom:0,
                                                paddingTop:0,
                                                }}>
                                                            
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}Select All</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}Apperel, Shoes & Accessories</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}Automotive</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}Babies & Kids</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}Beauty, Health & Wellness</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}Books, Toys and Games</p>
                                                <p className="OptionsStyle" style={{fontSize:11}}>{<RadioButton/>}Bussiness & Office</p>
                                    </div>
                                    <Line />
                                </div>

                                <Form />      
                                <div style={{paddingTop:"2%"}}>
                                    <p className="OptionsStyle" style={{fontSize:11}}>Have morre stote Locations?
                                        {<p className="OptionsStyle" style={{fontSize:11, fontWeight:600, display:"inline-block"}}>Add new location</p>} 
                                    </p>
                                    <div>
                                        <h5>Add bussiness credentials</h5>
                                        <p style={{fontSize:11}}> Your bussiness registration document(such as incorporation certificate and a government issuend ID is required to verify and protect identiy of your bussiess. You may launch your sstore now but it will only be activated after prper verification of your bussiness credentials.</p>    
                                            <form>
                                                <div style={{marginTop:"1%"}}>
                                                <input style={{height:20, borderColor:"#D8E3E7", width:"15%", borderRadius:"5%"}}/>
                                                <button style={{width:70, height:25, marginLeft:"1%"}}>Upload</button>
                                                </div>
                                                <div style={{marginTop:"1%"}}>
                                                <input style={{height:20, borderColor:"#D8E3E7", width:"15%", borderRadius:"5%"}}/>
                                                <button style={{width:70, height:25, marginLeft:"1%"}}>Upload</button>
                                                </div>
                                            </form>
                                            
                                    </div>
                                </div>
                </div>
                <Link to="/items"> 
                    <div style={{display:"flex",justifyContent:"flex-end", marginRight:"10%", marginTop:"0.5%", marginBottom:"0.5%"}}>  
                        <button style={{backgroundColor:"#053742",paddingTop:10, paddingBottom:10, color:"#fff", fontWeight:600, width:"10%", fontSize:12}}>Save & Continue</button>
                    </div>  
                </Link>        
    </div>
    
  );
}

export default RejisterScreen;
