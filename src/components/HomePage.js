// src/pages/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './style.css';
import Jobs from './Jobs';

function HomePage() {
    const navigate = useNavigate();
    const handleJobs = ()=>{
        navigate('/jobs')
    } 
    const handleBookMark = () =>{
        navigate('/bookmarks')
    }
  return (
    <div className='home-page-container'>
      <Header />
     
      <main>
      <div className="hero">
          <div className='hero-sub-section'>
            <div>
              <h1>See who's hiring in your area.</h1>
              <p>Chat to people on public transport, connect on social media and be courageous for networking success.</p>
            </div>
            <div className="hero-buttons">
              <button className="apply-btn" onClick={handleJobs}>APPLY JOB</button>
              <button className="companies-btn" onClick={handleBookMark}>BOOK MARK</button>
            </div>
          </div>
          <div className='career-img'>
            <img src='./Desktop-karir.png' alt='career-page'/>
          </div>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
