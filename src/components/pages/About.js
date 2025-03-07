import React, { useEffect } from 'react';
import '../../App.css';
import './About.css';

function About() {
  return (
    <>
      <div className="about">About</div>
      <div className="about-page">
       <div className="excerpt">
        <div className="title__container">
          <h1 className="title__first">Hi there,</h1>
          <h1 className="title__second">We're so happy you're here</h1>
          <img
            className="flower"
            src="https://raw.githubusercontent.com/melipi/img-repo/main/flower-silhouette.png"
            alt="flower silhouette"
          />
        </div>
      </div>

        {/* <h1>We're so happy you're here!</h1> */}

        <section className="about-content">
          <p>So, you love a good dinner party but hate the stress of planning? That’s where we come in! 
            We’re all about making hosting effortless, fun, and totally Instagram-worthy—without the hours of prep.
          </p>
          <p>
            We’re here to help you create the
            perfect event that’s as easy to put together as it is to enjoy. 
            We curate beautifully themed dinner party boxes, packed with everything you need to host an unforgettable evening. 
            Think stunning tablescapes, conversation starters, curated playlists, and even a little something extra to wow your guests. 
          </p>

          <h2>What It Is</h2>
          <p>
            Our boxes are designed with you in mind! Whether you're planning for your next girls night, your best friend's birthday, or a casual get-together, we’ve got you covered. 
            We make sure to include everything you need for a fun filled night. 
            You can also customize your kit with additional add-ons to fit your event’s unique vibe!
          </p>

          <h2>How It Works</h2>
          <p>
            Planning your event is as easy as 1-2-3:
          </p>
          <ol>
            <li>Pick your Kit and customize it with the add-ons you want.</li>
            <li>We’ll deliver everything straight to your door!</li>
            <li>Live in your moment! Take pics, have fun, laugh lots, and relax knowing we have it covered.</li>
            <li>After the party, simply mail the kit back to us.</li>
          </ol>
          <p>
            That’s it! No stress, no hassle—just the fun part: throwing the perfect event.
          </p>
        </section>

        <div className="about-btns">
          {/* future buttons */}
        </div>
      </div>
    </>
  );
}

export default About;