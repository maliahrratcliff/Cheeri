import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';

function About() {
  return (
    <>
      <h1 className="about">About</h1>
      <div className="about-page">
        <h1>We're so happy you're here!</h1>

        <section className="about-content">
          <p>
            We know how much fun it is to host a party, but also how overwhelming it can be to plan and organize
            everything. That’s where we come in! Let us help you plan
            your dream event without all the hassle.
          </p>
          <p>
            We believe every celebration deserves to be stress-free and fun! So, we’re here to help you create the
            perfect event that’s as easy to put together as it is to enjoy.
          </p>

          <h2>How We Do It</h2>
          <p>
            Our event kits are designed with you in mind! Whether you're planning a birthday, wedding, or a casual get-together, we’ve got you covered. 
            Our kits include everything you need for an unforgettable event. 
            You can also customize your kit with additional add-ons to fit your event’s unique vibe!
          </p>

          <h2>How It Works</h2>
          <p>
            Planning your event is as easy as 1-2-3:
          </p>
          <ol>
            <li>Pick your Kit and customize it with the add-ons you want.</li>
            <li>We’ll deliver everything straight to your door!</li>
            <li>After the party, simply mail the kit back to us (we'll include a return label for your convenience).</li>
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
