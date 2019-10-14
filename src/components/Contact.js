import React, { Component } from 'react'

export default class Contact extends Component {
    state = {
      email: {
        name: '',
        sender: '',
        subject: '',
        text: ''
      }
    }

  sendEmail = (e) => {
    e.preventDefault();
    const { email } = this.state
    fetch(`http://127.0.0.1:4000/send-email?recipient=rexic999@gmail.com&sender=${email.sender}&topic=${email.subject}&text=${email.text}&name=${email.name}`)
      .catch(err => console.log(err))
  }

  render() {
    const { email } = this.state
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
              <p className="lead">We would love to hear from you. Let us know if you would like to book us
              </p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              {/* form */}
              <form id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label>Name<span className="required">*</span></label>
                    <input type="text" size={35} value = {email.name} onChange = {e => this.setState({ email: { ...email, name: e.target.value }})} />
                  </div>
                  <div>
                    <label>Email <span className="required">*</span></label>
                    <input type="text" size={35} value = {email.sender} onChange = {e => this.setState({ email: { ...email, sender: e.target.value }})}/>
                  </div>
                  <div>
                    <label>Subject</label>
                    <input type="text" size={35} value = {email.subject} onChange = {e => this.setState({ email: { ...email, subject: e.target.value }})}/>
                  </div>
                  <div>
                    <label>Message <span className="required">*</span></label>
                    <textarea cols={50} rows={15} value = {email.text} onChange = {e => this.setState({ email: { ...email, text: e.target.value }})} />
                  </div>
                  <div>
                    <button onClick = {this.sendEmail} className="submit">Submit</button>
                  </div>
                </fieldset>
              </form> {/* Form End */}
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}