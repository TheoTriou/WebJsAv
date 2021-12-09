import React, { useState } from "react";
import MessageComponent from "./MessageComponents.js"

const FirstComponent = (props) => {

  const [message, setMessage] = useState("state message");
  /*this.state = {
    state_message: "state message",
  };*/

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  return(
    <div>
      <input type="text" onChange={handleChange} />
      <MessageComponent message={message} />
    </div>
  )
}


// Using class
/*class FirstComponent extends React.Component {

render() {
  return(
    <p>display : {this.props.my_param}, int : {this.props.param_int} !</p>
  )
}

}*/

export default FirstComponent;
