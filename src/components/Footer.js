import React from 'react'
import { Button } from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className ='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Join the Cheeri newsletter to receive exclusive offers, party tips, and early access to new event kits!
        </p>   
        <p className='footer-subscription-text'>
            You can unsubscribe at any time.</p>   
            <div className='input-areas'>
                <form>
                    <input type='email'
                    name='Email'
                    placeholder='youremail@gmail.com'
                    className='footer-input'>
                    </input>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
            </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>Who we are</Link>
            <Link to='/'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Locations</Link>
            <Link to='/'>Inquiries</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>TikTok</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Cheeri
              <i class='fa-solid fa-martini-glass-citrus' />
            </Link>
          </div>
          <small class='website-rights'>Cheeri © 2025</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link tiktok'
              to='/'
              target='_blank'
              aria-label='TikTok'
            >
              <i class="fa-brands fa-tiktok"></i>
            </Link>
            <Link
              class='social-icon-link TikTok'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;