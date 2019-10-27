import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    const voidd = void(0)
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some Videos</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img alt="" src="images/portfolio/port1.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Invierno Porteño (Winter)</h5>
                          <p>Astor Piazzolla: Four Seasons of Buenos Aires</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02">
                      <img alt="" src="images/portfolio/port2.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Lord'sPrayer</h5>
                          <p>Birchman Baptist Church</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03">
                      <img alt="" src="images/portfolio/port3.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Divertimento in C, HOB IV 1</h5>
                          <p>J. Haydn</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04">
                      <img alt="" src="images/portfolio/port4.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Trio in E Major - I Allegretto</h5>
                          <p>C.P.E. Bach</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05">
                      <img alt="" src="images/portfolio/port5.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Amazing Grace</h5>
                          <p>Arranged By Soma Trio</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06">
                      <img alt="" src="images/portfolio/port6.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>What A Friend We Have In Jesus</h5>
                          <p>Jazz Meets Hymns</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07">
                      <img alt="" src="images/portfolio/port7.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>This Is My Father's World</h5>
                          <p>Living Sound Production</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-08">
                      <img alt="" src="images/portfolio/port8.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Gabriel's Oboe</h5>
                          <p>Ennio Morricone</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>  {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            <h1><a href = "https://www.youtube.com/channel/UCR6tAjQPTA6V0Tqi52tKXkA" target = "_blank" rel = "noopener noreferrer">Click Here For More Videos!</a></h1>
            {/* Modal Popup
          --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <div className="video-responsive">
                <iframe title = "v1" width="420" height="315" src="https://www.youtube.com/embed/4rX79bvJ5_A" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="description-box">
                <h4>Piazzolla: Invierno Porteño (Winter)</h4>
                <p>Astor Piazzolla: Four Seasons of Buenos Aires - Invierno Porteno (Winter)</p>
                <span className="categories"><i className="fa fa-tag" />Flute: Helen Kim, Cello: Hamin Kim, Piano: Sunny Salls</span>
              </div>
              <div className="link-box">
                <a href={voidd} className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <div className="video-responsive">
                <iframe title = "v2" width="420" height="315" src="https://www.youtube.com/embed/bklNFJNWVqo" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="description-box">
                <h4>The Lord's Prayer - Sungwon Park</h4>
                <p>Birchman Baptist Church</p>
                <span className="categories"><i className="fa fa-tag" />Flute: Helen Kim, Violin: Hana Kim, Cello: Hamin Kim</span>
              </div>
              <div className="link-box">
                <a href={voidd} className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <div className="video-responsive">
                <iframe title = "v3" width="420" height="315" src="https://www.youtube.com/embed/dENt1k7je6Y" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="description-box">
                <h4>Divertimento in C, HOB IV 1</h4>
                <p>J. Haydn</p>
                <span className="categories"><i className="fa fa-tag" />Flute: Helen Kim + Ji Young Kim, Cello: Hamin Kim, Piano: Hyun-Jeong Hwang</span>
              </div>
              <div className="link-box">
                <a href={voidd} className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <div className="video-responsive">
                <iframe title = "v4" width="420" height="315" src="https://www.youtube.com/embed/ohur2ip6tUI" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="description-box">
                <h4>C.P.E. Bach - Trio in E Major - I. Allegretto</h4>
                <p>Dukes Hall, Royal Music Academy of Music, London, U.K.</p>
                <span className="categories"><i className="fa fa-tag" />Flute: Helen Kim + Ji Young Kim, Cello: Hamin Kim, Piano: Hyun-Jeong Hwang</span>
              </div>
              <div className="link-box">
                <a href={voidd} className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <div className="video-responsive">
                <iframe title = "v5" width="420" height="315" src="https://www.youtube.com/embed/Oda1CA0X6iE" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="description-box">
                <h4>Amazing Grace - RSM Trio</h4>
                <p>Arranged by Soma Trio</p>
                <span className="categories"><i className="fa fa-tag" />Flute: Helen Kim, Cello: Hamin Kim, Piano: Liz Sellers</span>
              </div>
              <div className="link-box">
                <a href={voidd} className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
              <div className="video-responsive">
                <iframe title = "v6" width="420" height="315" src="https://www.youtube.com/embed/GI3WOw8n2E4" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="description-box">
                <h4>What A Friend We Have In Jesus</h4>
                <p>Jazz meets hymns with JUJU Song</p>
                <span className="categories"><i className="fa fa-tag" />Violin: Hana Kim</span>
              </div>
              <div className="link-box">
                <a href={voidd} className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
              <div className="video-responsive">
                <iframe title = "v7" width="420" height="315" src="https://www.youtube.com/embed/FuogJ7iCM7A" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="description-box">
                <h4>This Is My Father's World</h4>
                <p>Living Sound Production</p>
                <span className="categories"><i className="fa fa-tag" />Flute: Helen Kim</span>
              </div>
              <div className="link-box">
                <a href={voidd} className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
              <div className="video-responsive">
                <iframe title = "v8" width="420" height="315" src="https://www.youtube.com/embed/c1F0Qlt2hE0" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="description-box">
                <h4>Gabriel's Oboe</h4>
                <p>Ennio Morricone</p>
                <span className="categories"><i className="fa fa-tag" />Oboe: Amy Kim</span>
              </div>
              <div className="link-box">
                <a href={voidd} className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
          </div> {/* row End */}
        </section>
      </React.Fragment>
    )
  }
}