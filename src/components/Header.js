import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className = "tint">
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#portfolio">Media</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">Kim Quartet</h1>
              <h3 className = "text-stroke">In the state of Texas, <span>expressive</span>, <span>organized</span>, <span>inspirational</span> and <span>solemn</span>, performing with gifts from above.</h3>
              <ul className="social">
                <li><a href="https://www.facebook.com/kimquartet/" target = "_blank" rel = "noopener noreferrer"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.instagram.com/kimquartet/" target = "_blank" rel = "noopener noreferrer"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
        </div>
      </React.Fragment>
    )
  }
}