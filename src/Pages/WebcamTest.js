import React, {Component} from 'react';
import Webcam from 'react-webcam';

class WebcamTest extends Component {

    constructor(){
        super()
    }

render()
{
  

    return(
        <div style={{height: "100%", width: "100%"}}>
        <Webcam
        audio={false}
      />
      </div>
    )
}

}

export default WebcamTest