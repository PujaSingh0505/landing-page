import React, { useState } from "react";
import "../styles/landingPage.css";
import Footer from "../components/Footer";

const benifits = [
  {
    imgUrl: "/assets/Group 114.png",
    title: "Learn the foundations of Salesforce from scratch",
  },
  {
    imgUrl: "/assets/Group 112.png",
    title: "Understand the career opportunities in the Salesforce ecosystem",
  },
  {
    imgUrl: "/assets/bulb.png",
    title: "Gain insights from real-world industry experiences",
  },
  {
    imgUrl: "/assets/Group 98.png",
    title: " Interactive Q&A session to get your queries answered",
  },
];

const ques = [
  {
    imgUrl: "/assets/Group 74 (1).png",
    title: "Introduction to Salesforce",
    description: "This is an introduction to Salesforce.",
  },
  {
    imgUrl: "/assets/Group 74 (1).png",
    title: "Career Opportunities in the Salesforce Ecosystem",
    description:
      "This session covers various career opportunities in the Salesforce ecosystem.",
  },
  {
    imgUrl: "/assets/Group 74 (1).png",
    title: "Building Blocks of Salesforce Knowledge",
    description:
      "This session covers various Building Blocks of Salesforce Knowledge.",
  },
  {
    imgUrl: "/assets/Group 74 (1).png",
    title: "Q&A Session",
    description: "This session covers various Q&A Session.",
  },
  {
    imgUrl: "/assets/Group 74 (1).png",
    title: "Exclusive Offer: Unlock Full Salesforce Course",
    description:
      "Introduction to the comprehensive Salesforce course offered by Coding Comando. Special discount or bonuses for workshop attendees who enroll in the full course.",
  },
  {
    imgUrl: "/assets/Group 74 (1).png",
    title: "Closing and Call to Action",
    description: "This session covers various Closing and Call to Action.",
  },
];
const Landing = () => {
  const [description, setDescription] = useState(
    Array(ques.length).fill(false)
  );

  const handleSubmit = (index) => {
    const newExpandItems = [...description];
    newExpandItems[index] = !newExpandItems[index];
    setDescription(newExpandItems);
  };

  return (
    <div className="main">
      <nav>
        <img src="/assets/logo.png" alt="logo"></img>
      </nav>

      {/* booking */}
      <div className="booking">
        <p>
          Master the Salesforce Domain with Industry Expert Prateek Prasoon!
        </p>
        <button>Reserve Seat now for Rs 249/-</button>
      </div>

      {/* instructor */}
      <div className="instructor">
        <img src="/assets/instructor.png"></img>
        <div className="details">
          <h3>Instructed by</h3>
          <h2>Prateek Prasoon</h2>
          <p>Founder of CloudPrism Solutions </p>
          <span>
            <h2 className="date">26 Sept 2023</h2>
            <h2>26 Sept 2023</h2>
          </span>
          <button>Limited Seat Available</button>
        </div>
      </div>

      <div className="content">
        <div className="video">
          <p> Video or Photo</p>
        </div>

        <div className="for-who">
          <h1>Who is this program for?</h1>
          <ul className="who">
            <li>
              <img src="/assets/Group 74 (1).png"></img>
              <p>BCA / MCA Graduates</p>
            </li>
            <li>
              <img src="/assets/Group 74 (1).png"></img>
              <p>BCA / MCA Graduates</p>
            </li>
            <li>
              <img src="/assets/Group 74 (1).png"></img>
              <p>BCA / MCA Graduates</p>
            </li>
            <li>
              <img src="/assets/Group 74 (1).png"></img>
              <p>BCA / MCA Graduates</p>
            </li>
            <li>
              <img src="/assets/Group 74 (1).png"></img>
              <p>BCA / MCA Graduates</p>
            </li>
            <li>
              <img src="/assets/Group 74 (1).png"></img>
              <p>BCA / MCA Graduates</p>
            </li>
            <li>
              <img src="/assets/Group 74 (1).png"></img>
              <p>BCA / MCA Graduates</p>
            </li>
            <li>
              <img src="/assets/Group 74 (1).png"></img>
              <p>BCA / MCA Graduates</p>
            </li>
          </ul>
          <button>Kickstart your Salesforce Carrer at just Rs 249/-</button>
        </div>

        {/* benifits */}
        <div className="benifits">
          <h1>Benifits</h1>
          <div className="array">
            {benifits.map((event, index) => (
              <div key={index} className="ele">
                <img src={event.imgUrl} alt={event.title} />
                <div className="text">
                  <p className="title">{event.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="agenda">
        <h1>Agenda</h1>
        <div className="list">
          {ques.map((event, index) => (
            <div key={index} className="li">
              <span>
              <img src={event.imgUrl}></img>
                <div className="data">
                  <p>{event.title}</p>
                  {description[index] && <h4>{event.description}</h4>}
                </div>
              </span>
              <button onClick={() => handleSubmit(index)}>
                {description[index] ? "-" : "+"}
              </button>
              {/* {description[index] && ( 
          <h4>{event.description}</h4>
        )
        } */}
            </div>
          ))}
        </div>
      </div>

      {/* Meet Your Instructor */}
      <div className="meet">
        <h1>
          Meet Your <span>Instructor</span>
        </h1>
        <div className="ele">
          <img src="/assets/instructor.png"></img>
          <div className="intro">
            <h2 className="nam">Prateek Prasoon</h2>
            <p>
              Founder of CloudPrism Solutions With over 7 years of hands-on
              Salesforce expertise, Prateek has guided numerous individuals to
              successful careers in the tech industry.
            </p>
            <p>
              Founder of CloudPrism Solutions With over 7 years of hands-on
              Salesforce expertise, Prateek has guided numerous individuals to
              successful careers in the tech industry.
            </p>
          </div>
        </div>
      </div>

      {/* ques */}
      <div className="ques">
        <h1>Frequently Asked Questions</h1>
        <div className="list">
          {ques.map((event, index) => (
            <div key={index} className="li">
              <span>
                <img src={event.imgUrl}></img>
                <div className="data">
                  <p>{event.title}</p>
                  {description[index] && <h4>{event.description}</h4>}
                </div>
              </span>
              <button onClick={() => handleSubmit(index)}>
                {description[index] ? "-" : "+"}
              </button>
              {/* {description[index] && ( 
          <h4>{event.description}</h4>
        )
        } */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
