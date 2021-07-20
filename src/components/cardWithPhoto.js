import React from 'react';
import Photo from "./mackbook.jpg";
function CardPhoto() {
    return (
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
               <img src={Photo}  
                         alt="Mac Book"
                         style={{height:140,width:140}}/>
         {/* <p style={{textAlign:"center"}}>+</p>
         <p>Add items</p> */}
         </div>     
 </div>
 <div style={{height:60, width:"100%", display:"flex", justifyContent:"center", alignItems:"flex-end"}}>
     <p style={{fontSize:11}}>MackBook Air 13 inch</p>
 </div>
</div>   
    )
}

export default CardPhoto;
