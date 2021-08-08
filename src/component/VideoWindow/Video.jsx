import { useRef, useState } from "react"
import style from "./TeacherScreen.module.css"

const Video = () => {

    const [startCam,setStartCam] = useState(false)

    const myVideo = useRef();
    const videoElement = myVideo.current;

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUsermedia ||
    navigator.mozGetUseMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    const startCamera = () => {
        if(startCam){
            setStartCam(false)
            navigator.getUserMedia = false
        }else if(!startCam){
           // navigator.getUserMedia = false
            setStartCam(true)
        }
    }

    if(navigator.getUserMedia && startCam==true){
        navigator.getUserMedia({
                video: true,
                audio: false
        },handleVideo, handleErr);
    }
    
    function handleVideo(stream){
        videoElement.srcObject =  stream;
    //    setVideoSrc(stream)
    }
    
    function handleErr(e){
        console.log(e)
    }

    return(
        <div>
            <div className={style.teacherSreen}>
                <video autoPlay={true} ref={myVideo} style={{backgroundColor: "black"}} >
                </video>
                <button onClick={startCamera}>{startCam ? "Stop" : "Start"}</button>
            </div>
        </div>
    )
}

export default Video;