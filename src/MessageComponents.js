import React from "react";


const MessageComponent = (props) => {
  return(
    <div>
      <button  onClick={ ()=> {alert(props.message)} } >See message</button>
      <p>message : {props.message}</p>
    </div>
  )
}

export default MessageComponent;
