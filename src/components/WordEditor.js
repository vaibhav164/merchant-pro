import React from 'react'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
function WordEditor() {
    return (
        <div  style={{width:"50%", height:"100%", display:"inline-block"}}>
             <p className="OptionsStyle" style={{fontSize:11, marginBottom:0, fontWeight:500,marginBottom:"2%"}}>Description</p>
            <SunEditor   style={{fontSize:"5%"}}/>    
        </div>
    )
}

export default WordEditor
