import './App.css';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Welcome from './components/Welcome';
import EmailRestaurant from './components/EmailRestaurant';
import InfoAndMenu from './components/InfoAndMenu';

function App() {

  const [page,setPage] = useState(1);

  const showPage = ()=>{
    if(page == 1)
      return <Welcome page = {page} setPage = {setPage}/>
    else if(page == 2)
      return <EmailRestaurant page = {page} setPage = {setPage}/>
    else if(page == 3)
      return <InfoAndMenu/>
  }


  return (
    <div className="App">
      {showPage()}

    </div>
  );
}

export default App;
