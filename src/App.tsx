import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllContactsScreen from './screens/AllContactsScreen';
import NewContactScreen from './screens/NewContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import NavBar from './components/Navbar/Navbar';
import MapsAndGraphsScreen from './screens/MapsAndGraphsScreen';


function App() {
  console.log('hiii');
  
  return (
 
      <Router>
        <div >
        <NavBar/>
        <Routes>
          <Route path='/' Component={AllContactsScreen}/>
          <Route path='/newContact' Component={NewContactScreen}/>
          <Route path='/editContact' Component={EditContactScreen}/>
          <Route path='/mapsAndGraphs' Component={MapsAndGraphsScreen}/>
        </Routes>
        </div>
        
      </Router>

  );
}

export default App;
