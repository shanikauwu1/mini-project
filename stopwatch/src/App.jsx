import { useEffect, useState } from 'react'

import './App.css'

function App() {
    const [time, setTime]=useState(0);
    const [running, setRunning]=useState(false);

    useEffect( ()=>{
        let interval;
        if(running){
          interval=setInterval(()=>{
            setTime((prevTimes)=>prevTimes+10);
          },10);
        }else if (!running){
          clearInterval(interval);
        }

        return()=>clearInterval(interval);
    }, [running]

    );

      return (
        <>
        <h1>Stop Watch</h1>
        <div>
            <span>{("0" +Math.floor(time / 60000)).slice(-2)}</span>
            <span>{("0"+Math.floor((time % 60000) / 1000)).slice(-2)}</span>
            <span>{("0"+Math.floor((time % 1000) / 10)).slice(-2)}</span>
        </div>
        <button onClick={()=>{setRunning(true)}}>Start</button>
        <button onClick={()=>{setRunning(false)}}>Stop</button>
        <button onClick={()=>{setTime(0)}}>Reset</button>
        
        </>
      )
}

export default App
