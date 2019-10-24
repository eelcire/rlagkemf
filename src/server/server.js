const express = require('express')
const sgMail = require('@sendgrid/mail')
const cors = require('cors')
const path = require('path')

const app = express()
const port = process.env.PORT || 80

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

app.use(cors());

app.use( express.static( `${__dirname}/../build` ) );

app.get('/', (req, res) => {
    res.send('SendGrid')
})

app.get('/send-email', (req, res) => {
    const { recipient, sender, topic, text, name } = req.query

    const msg = {
        to: recipient,
        from: sender,
        subject: topic,
        text: `From ${name}. ${text}`
    }

    sgMail.send(msg).then((msg) => console.log(text))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../build/index.html'))
  })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})