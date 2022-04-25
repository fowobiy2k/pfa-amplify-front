// import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'


// import { Link } from 'react-router-dom'
// import Navbar from '../components/Navbar'
import Teampic from "../components/Teampic";
// import Header from '../components/Header'
import Card from '../components/Card'
import classes from './home.module.scss'
import ComingFixtures from '../components/ComingFixtures'
import Footer from '../components/Footer'

const Home = ({ fixtures }) => {


    return (
        <div>
            
            {/* <div className="full-name">
                <div>
                    
                    <Header />
                </div>
                
                <div>
                <Navbar />
                </div>
                
            </div> */}

            

            <div className={classes.teampic}>
                <Teampic />
            </div>

            <div className={classes.msgBlock}>
                <Card url='pic2.jpg' header='enrol now' desc='join the best football academy in town' />
            </div>

            <div>
                {fixtures && <ComingFixtures fixtures={fixtures}/>}
            </div>

            <Footer />            

            

        </div>
    )
}

export default Home
