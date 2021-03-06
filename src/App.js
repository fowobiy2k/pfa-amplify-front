import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
// import './App.scss';
import './App.scss'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {

  const [fixtures, setFixtures] = useState([]);
  // const [message, setMessage] = useState([]);

  useEffect(() => {

    const getResources = async () => {

      // await fetchFixtures();
      // axios.get('/home').then(
      //   res => {
      //     const response = res.data;
      //     console.log('Data: ', response)

      //   }
      // )

      axios.get('/allmatches').then(
        res => {
          const response = res.data;
          console.log('Data: ', response)
          setFixtures(response)
          // console.log('Name: ', response.name)
          // console.log('Num: ', response.num)
          // console.log('Balance: ', response.balance)
        }
      )

    }

    getResources()

  }, [])

  // Fetch Fixtures
  // const fetchFixtures = async () => {


  //   const res = await fetch('/all/fixtures')
  //   const data = await res.json()
  //   console.log(data)
  //   setFixtures(data)

  //   return data
  // }

  return (
    <Router>

      <div className="App">
        
      <div className="full-name">
                <div>
                    
                    <Header />
                </div>
                
                <div>
                <Navbar />
                </div>
                
            </div>
        
        <Routes>
          <Route path="/" exact element={<Home fixtures={fixtures} />} />
          
          {/* <Route path="/admin" render={
            props => <Admin />
          }/> */}

          <Route path="/admin" element={<Admin />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
