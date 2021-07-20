import React from 'react'

function Card() {
    return (
                            <div style={{
                                           height:200,
                                           width:140,
                                           margin:"1%", 
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
                                        </div>     
                                </div>
                                <div style={{height:60, width:"100%", display:"flex"}}></div>
                             </div>   
    )
}

export default Card
