import {useState} from "react";

const Switcher = () => {
    const [sw, setsw] = useState(false);

  return (
    <div style={{border:"2px solid black", padding:"50px"}}>
        {sw ? (
            <span>Dark</span>
        ): (<span>Light</span>)}
        <br />
        <input type="text" placeholder="Write something" style={{border:"2px solid black",padding:"5px" ,paddingLeft:"8px", borderRadius:"8px"}} key={sw?"dark":"light"} />
        <button onClick={()=>setsw((s)=>!s)} style={{marginLeft: "5px", border:"2px solid black", padding:"5px 10px", borderRadius:"8px"}}>Switch</button>
        
    </div>
  )
}

export default Switcher;