import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home"
import CreateYourPlan from "./Pages/CreateYourPlan"
import AboutUs from "./Pages/AboutUs"
import Layout from "./Components/Layout"
import './Styles/globalStyles.css'

function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route element={< Layout />}>
      <Route path="/" element={< Home />} />
      <Route path="about us" element={< AboutUs />} />
      <Route path="create your plan" element={< CreateYourPlan />} />
    </Route>
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
