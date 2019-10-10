import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <React.Fragment>

      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/helen.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>Helen Kim</h2>
            <p>As a young rising artist, Ms. Kim has won numerous competitions and auditions such as Carolina Band Festival, Dallas Symphony Festival, Raleigh Area Flute Association and Raleigh Symphony Orchestra Concerto Competition.
              Having performed as a soloist with Carolina Philharmonic and Raleight Symphony Orchestra, she is now teaching flute at Birdville High School and running a private flute and piccolo studio in Forth Worth, TX.
            </p>
            <h5><a href = "http://www.helenkimflute.com/" target = "_blank">Click To Learn More</a></h5>
                <a href="#"><i className="fa fa-facebook social_media" /></a>
                <a href="#"><i className="fa fa-twitter social_media" /></a>
                <a href="#"><i className="fa fa-google-plus social_media" /></a>
                <a href="#"><i className="fa fa-linkedin social_media" /></a>
                <a href="#"><i className="fa fa-instagram social_media" /></a>
                <a href="#"><i className="fa fa-dribbble social_media" /></a>
                <a href="#"><i className="fa fa-skype social_media" /></a>
          </div> {/* end .main-col */}
        </div>
      </section>
            </React.Fragment>
        )
    }
}