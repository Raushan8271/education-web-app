import { useEffect, useRef, useState } from "react"

const SocketContextProvider = ({children}) => {
   const [stream,setStream] = useState(null);
   const [me, setMe] = useState('');

   const myVideo = useRef();
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video:true,audio:true})
           .then((currentStream) => {
               setStream(currentStream);
               myVideo.current.srcObject = currentStram;
           });

           socket.on('me',(id)=>{
               setMe(id);
           })

           socket.on('calluser')
    })

    const answerCall = () => {

    }
    
    const callUser = () => {

    }
}