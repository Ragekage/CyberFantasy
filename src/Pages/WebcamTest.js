import React, {Component} from 'react';
import Webcam from 'react-webcam';

class WebcamTest extends Component {

    constructor(){
        super()
    }

render()
{
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    return(
        <div style={{height: "100%", width: "100%"}}>
        <Webcam
        audio={false}
        height={720}
        width={1280}
        videoConstraints={videoConstraints}
      />
      </div>
    )
}

}

export default WebcamTest