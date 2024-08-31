import React from 'react';
import { ReactTyped } from "react-typed";


const eventsData = [
  {
    title: "Tech Talk 2024",
    type: "Webinar",
    postedBy: "John Doe, Batch of 2022",
    description: "Join us for an exciting webinar on the latest trends in technology.",
  },
  {
    title: "Alumni Meetup",
    type: "Meetup",
    postedBy: "Jane Smith, Batch of 2002",
    description: "Reconnect with fellow alumni in a casual, friendly environment.",
  },
  {
    title: "2010 Reunion",
    type: "Batch Reunion",
    postedBy: "Alex Johnson, Batch of 2010",
    description: "Celebrate 14 years with your classmates. Catch up and relive memories.",
  },
  {
    title: "Career Seminar",
    type: "Seminar",
    postedBy: "Chris Lee, Batch of 2018",
    description: "Learn from industry leaders in our career growth seminar.",
  },
];

export default function Events(){
  return (
    
    <div className="events-page">
    <div className="heading-container">
    <img src={require("../images/alumnimeet.avif")} alt=""/>
      <h1 className="events-heading">
        <ReactTyped
          strings={["Cool Events", "Batch Reunions", "Random Meetups", "Listed here!"]}
          typeSpeed={90}
          loop
          backSpeed={25}
          cursorChar="."
          showCursor={true}
        />
      </h1>
    </div>
    <div className="events-container">
      {eventsData.map((event, index) => (
        <div className="event-card" key={index}>
          <h2 className="event-title">{event.title}</h2>
          <p className="event-type">Type: {event.type}</p>
          <p className="event-posted-by">Posted by: {event.postedBy}</p>
          <p className="event-description">{event.description}</p>
          <button className="enroll-button">Enroll</button>
        </div>
      ))}
    </div>
  </div>
);
};



