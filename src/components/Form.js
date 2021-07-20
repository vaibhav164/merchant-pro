import React from 'react'

function Form() {
    return (
        <div>
            <h5>Your bussiness address</h5>
            <form>
                <p className="OptionsStyle" style={{fontSize:11, marginBottom:0}}>Location Name</p>
                <input type="text" name="name" placeholder="Fifth Avenue (e.g .,)" style={{width:"41.45%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0, height:25}} />
                
                <div style={{flexDirection:"row", display:"flex"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <p className="OptionsStyle" style={{fontSize:10, fontWeight:600, marginBottom:0}}>First Name</p>
                        <input type="text" name="name" style={{width:"150%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0,  height:25}} />
                    </div>
                    <div style={{display:"flex", flexDirection:"column", marginLeft:"10%"}}>  
                        <p className="OptionsStyle" style={{fontSize:10, fontWeight:600, marginBottom:0}}>Last Name</p>
                        <input type="text" name="name" style={{width:"150%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0,  height:25}} />
                    </div>  
                </div>
                <p className="OptionsStyle" style={{fontSize:10, marginBottom:0, fontWeight:600}}>Address</p>
                <input type="text" name="name" style={{width:"41.45%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0,  height:25}} />

                <p className="OptionsStyle" style={{fontSize:10, marginBottom:0, fontWeight:600}}>Apartment, suite, etc. (Optional</p>
                <input type="text" name="name" placeholder="Fifth Avenue (e.g .,)" style={{width:"41.45%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0,height:25}} />

                <div style={{flexDirection:"row", display:"flex"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <p className="OptionsStyle" style={{fontSize:10, fontWeight:600, marginBottom:0}}>City</p>
                        <input type="text" name="name" style={{width:"150%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0,  height:25}} />
                    </div>
                    <div style={{display:"flex", flexDirection:"column", marginLeft:"10%"}}>  
                        <p className="OptionsStyle" style={{fontSize:10, fontWeight:600, marginBottom:0}}>Postal/Zip code</p>
                        <input type="text" name="name" style={{width:"150%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0,  height:25}} />
                    </div>  
                </div>
                <div style={{flexDirection:"row", display:"flex", marginTop:"1%"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <input type="text" name="name" style={{width:"150%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0,  height:25}} />
                    </div>
                    <div style={{display:"flex", flexDirection:"column", marginLeft:"10%"}}>  
                        <input type="text" name="name" style={{width:"150%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0,  height:25}} />
                    </div>  
                </div>

                <div style={{flexDirection:"row", display:"flex"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <p className="OptionsStyle" style={{fontSize:10, fontWeight:600, marginBottom:0}}>Phone number</p>
                        <input type="text" name="name" style={{width:"150%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0,  height:25}} />
                    </div>
                    <div style={{display:"flex", flexDirection:"column", marginLeft:"10%"}}>  
                        <p className="OptionsStyle" style={{fontSize:10, fontWeight:600, marginBottom:0}}>Bussiness website (optional)</p>
                        <input type="text" name="name" style={{width:"150%", borderColor:"#D8E3E7", borderWidth:1, borderRadius:5, margin:0,  height:25}} />
                    </div>  
                </div>

            </form>
        </div>
    )
}

export default Form
