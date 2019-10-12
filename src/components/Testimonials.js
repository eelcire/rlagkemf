import React, { Component } from 'react'

export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1><span>Client Testimonials</span></h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>“The Quartet was AMAZING! Everyone was lively and professional. 
                          They performed the songs perfectly with such amazing emotions to display.
                        </p>
                        <cite>Annabel Kline</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>Simply perfect. My day turns beautiful in front of a beautiful quartet. 
                          Everything was performed as per request and they have well exceeded my expectations.
                        </p>
                        <cite>Wesley Irwin</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>Easy to contact, great personalities, well dressed and mannered and last but not least, everyone loved their music.
                        </p>
                        <cite>Lorelai Mcgrath</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                  </ul>
                </div> {/* div.flexslider ends */}
              </div> {/* div.flex-container ends */}
            </div> {/* row ends */}
          </div>  {/* text-container ends */}
        </section>
      </React.Fragment>
    )
  }
}