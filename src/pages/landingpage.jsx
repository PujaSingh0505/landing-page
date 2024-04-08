import React from 'react';
import '../styles/landingPage.css';
import Footer from '../components/Footer';
import Questns from '../components/questns';

const Landing = () => {
  const benifits =[
    {
      imgUrl:'/assets/Group 114.png',
      title:'Learn the foundations of Salesforce from scratch'
    },
    {
      imgUrl:'/assets/Group 112.png',
      title:'Understand the career opportunities in the Salesforce ecosystem'
    },
    {
      imgUrl:'/assets/bulb.png',
      title:'Gain insights from real-world industry experiences'
    },
    {
      imgUrl:'/assets/Group 98.png',
      title:' Interactive Q&A session to get your queries answered'
    },
  ]

  return (
    <div className='main'>
      <nav>
        <img src='/assets/logo.png' alt='logo'></img>
      </nav>

      {/* booking */}
      <div className='booking'>
        <p>Master the Salesforce Domain with Industry Expert Prateek Prasoon!</p>
        <button>Reserve Seat now for Rs 249/-</button>
      </div>


      {/* instructor */}
<div className='instructor'>
<img src='/assets/instructor.png'></img>
<div className='details'>
  <h3>Instructed by</h3>
  <h2>Prateek Prasoon</h2>
  <p>Founder of CloudPrism Solutions </p>
  <span>
    <h2 className='date'>26 Sept 2023</h2>
    <h2>26 Sept 2023</h2>
  </span>
  <button>Limited Seat Available</button>
  </div>
</div>



<div className='content'>

<div className='video'>
 <p> Video or Photo</p>
  </div>

  <div className='for-who'>
    <h1>Who is this program for?</h1>
    <ul className='who'>
      <li> 
        <img src='/assets/Group 74 (1).png'></img>
        <p>BCA / MCA Graduates</p>
      </li>
      <li> 
        <img src='/assets/Group 74 (1).png'></img>
        <p>BCA / MCA Graduates</p>
      </li>
      <li> 
        <img src='/assets/Group 74 (1).png'></img>
        <p>BCA / MCA Graduates</p>
      </li>
      <li> 
        <img src='/assets/Group 74 (1).png'></img>
        <p>BCA / MCA Graduates</p>
      </li>
      <li> 
        <img src='/assets/Group 74 (1).png'></img>
        <p>BCA / MCA Graduates</p>
      </li>
      <li> 
        <img src='/assets/Group 74 (1).png'></img>
        <p>BCA / MCA Graduates</p>
      </li>
      <li> 
        <img src='/assets/Group 74 (1).png'></img>
        <p>BCA / MCA Graduates</p>
      </li>
      <li> 
        <img src='/assets/Group 74 (1).png'></img>
        <p>BCA / MCA Graduates</p>
      </li>
    </ul>
    <button>Kickstart your Salesforce Carrer at just  Rs 249/-</button>

  </div>


  {/* benifits */}
  <div className='benifits'>
    <h1>Benifits</h1>
    <div className='array'>
      {benifits.map((event, index) => (
        <div key={index} className='ele'>
          <img src={event.imgUrl}
          alt={benifits.title}/>
          <div className='text'>
            <p className='title'>
              {event.title}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>

  </div>
  {/* agenda */}
  <div className='agenda'> 
  <h1>Agenda</h1>
  <ul className='list'>
      <li> 
        <img src='/assets/Group 74 (1).png'></img>
        <p>Introduction to Salesforce</p>
      </li>
      <li> 
        <img src='/assets/Group 74 (1).png'></img>
        <p>Q&A Session</p>
      </li>
      <li>
      <img src='/assets/Group 74 (1).png'></img>
        <p>Exclusive Offer: Unlock Full Salesforce Course</p>
        </li>
      {/* <span className='Offer'> 
        <img src='/assets/Group 74 (1).png'></img>
        <div className='Offer2'>
        <p>Exclusive Offer: Unlock Full Salesforce Course</p>
        <h4> Introduction to the comprehensive Salesforce course offered by Coding Comando.<br/>
Special discount or bonuses for workshop attendees who enroll in the full course.</h4>
        </div>
      </span> */}
      <li> 
        <img src='/assets/Group 74 (1).png'></img>
        <p>Closing and Call to Action</p>
      </li>
    </ul>
  </div>




{/* Meet Your Instructor */}
<div className='meet'>
  <h1>Meet Your <span>Instructor</span></h1>
  <div className='ele'>
    <img src='/assets/instructor.png'></img>
    <div className='intro'>
      <h2 className='nam'>Prateek Prasoon</h2>
      <p>Founder of CloudPrism Solutions With over 7 years of hands-on Salesforce expertise, Prateek has guided numerous individuals to successful careers in the tech industry.</p>
      <p>Founder of CloudPrism Solutions With over 7 years of hands-on Salesforce expertise, Prateek has guided numerous individuals to successful careers in the tech industry.</p>
    </div>

  </div>

</div>



{/* ques */}
<Questns/>




<Footer/>
</div>
  )
}

export default Landing;
