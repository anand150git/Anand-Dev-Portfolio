import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Slide, ToastContainer } from 'react-toastify'
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import AllProjects from './sections/AllProjects'

createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Slide}
    />
  </>
)
