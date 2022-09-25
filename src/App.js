import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'


export default function App() {
  const sizeOf = 12;
  const [state, setState] = useState(0)
  
  const setProgress = (progress)=>{
    setState(progress)
  }
  let apikey = process.env.REACT_APP_API_KEY;
  
    return (
      <>
        <Navbar />
        <LoadingBar
          color='rgb(159, 0, 0)'
          progress={state}
          height = {3}
          
        />
        <Routes>
          <Route path="/" element={<div className="container"><News key="general" pageSize={sizeOf} category='general'  apiKey={apikey} progress={setProgress} /></div>} />
          <Route path="/business" element={<div className="container"><News key="business" pageSize={sizeOf} category='business'  apiKey={apikey} progress={setProgress} /></div>} />
          <Route path="/entertainment" element={<div className="container"><News key="entertainment" pageSize={sizeOf} category={'entertainment'} apiKey={apikey} progress={setProgress} /></div>} />
          <Route path="/health" element={<div className="container"><News key="health" pageSize={sizeOf} category='health'  apiKey={apikey} progress={setProgress} /></div>} />
          <Route path="/science" element={<div className="container"><News key="science" pageSize={sizeOf} category='science'  apiKey={apikey} progress={setProgress} /></div>} />
          <Route path="/sports" element={<div className="container"><News key="sports" pageSize={sizeOf} category='sports'  apiKey={apikey} progress={setProgress} /></div>} />
          <Route path="/technology" element={<div className="container"><News key="technology" pageSize={sizeOf} category='technology'  apiKey={apikey} progress={setProgress} /></div>} />

        </Routes>
      </>
    )
  
}






