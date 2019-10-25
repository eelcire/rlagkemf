import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: `${name}. Email: ${email}`,
      to_name: 'Kim Quartet',
      subject: subject,
      message_html: message,
      }
      emailjs.send(
      'gmail',
      'template_uerFqyrH',
      templateParams,
      'user_XNNyOMfuDzHxCjucUk9eZ'
      )
      window.alert('Email Sent!')
      this.resetForm()
  }
  resetForm() {
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }
  handleChange = (param, e) => {
      this.setState({ [param]: e.target.value })
    }

  render() {
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
              <form id="contactForm" name="contactForm" onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                  <div>
                    <label>Name<span className="required">*</span></label>
                    <input type="text" size={35} value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
                  </div>
                  <div>
                    <label>Email <span className="required">*</span></label>
                    <input type="email" size={35} value = {this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
                  </div>
                  <div>
                    <label>Subject</label>
                    <input type="text" size={35} value={this.state.subject} onChange={this.handleChange.bind(this, 'subject')}/>
                  </div>
                  <div>
                    <label>Message <span className="required">*</span></label>
                    <textarea cols={50} rows={15} value={this.state.message} onChange={this.handleChange.bind(this, 'message')} />
                  </div>
                  <div>
                    <button type = "submit" className="submit">Submit</button>
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