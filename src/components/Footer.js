import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
      <div className="footer-container">
          {/* <div className="footer-links">
              <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                      <h2>About us</h2>
                      <Link to="/sign-up">How it works</Link>
                      <Link to="/">Testimonials</Link>
                      <Link to="/">Careers</Link>
                      <Link to="/">Investors</Link>
                      <Link to="/">Terms of Service</Link>
                  </div>
                  <div className="footer-link-items">
                      <h2>Contact us</h2>
                      <Link to="/sign-up">How it works</Link>
                      <Link to="/">Testimonials</Link>
                      <Link to="/">Careers</Link>
                      <Link to="/">Investors</Link>
                      <Link to="/">Terms of Service</Link>
                  </div>
              </div>
              <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                      <h2>Videos</h2>
                      <Link to="/sign-up">How it works</Link>
                      <Link to="/">Testimonials</Link>
                      <Link to="/">Careers</Link>
                      <Link to="/">Investors</Link>
                      <Link to="/">Terms of Service</Link>
                  </div>
                  <div className="footer-link-items">
                      <h2>Social Media</h2>
                      <Link to="/sign-up">How it works</Link>
                      <Link to="/">Testimonials</Link>
                      <Link to="/">Careers</Link>
                      <Link to="/">Investors</Link>
                      <Link to="/">Terms of Service</Link>
                  </div>
              </div>
          </div>*/}
          <section className="social-media">
              <div className="social-media-wrap">
                  <div className="footer-logo">
                      <Link to="/" className="social-logo">
                          Doc's Spots <i className="fas fa-university"/>
                      </Link>
                  </div>
                  <small className="website-rights"><a href="https://www.towson.edu">Towson Univeristy</a></small>
                  <div className="social-icons">
                      <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
                          <i className="fab fa-facebook-f"/>
                      </Link>
                      <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="instagram">
                          <i className="fab fa-instagram"/>
                      </Link>
                      <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="twitter">
                          <i className="fab fa-twitter"/>
                      </Link>
                  </div>
              </div> 
          </section>
      </div>
  )
}
export default Footer