import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="https://www.facebook.com/kimquartet/" target = "_blank" rel = "noopener noreferrer"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.instagram.com/kimquartet/" target = "_blank" rel = "noopener noreferrer"><i className="fa fa-instagram" /></a></li>
              </ul>
              <ul className="copyright">
                <li></li>
                <li>Design by <a href="https://www.linkedin.com/in/eelcire/" target = "_blank" rel = "noopener noreferrer">Eric Lee</a></li>   
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}