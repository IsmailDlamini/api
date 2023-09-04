/* eslint-env node */
import express from "express"
import cors from "cors"
import connectToDatabase from "./MongoDB/mongoSetup.js"
import dotenv from "dotenv"
import ImportData from "./DataImport.js"
import projectRoute from "./Routes/ProjectRoutes.js"
import AboutRoutes from "./Routes/AboutRoutes.js"
import mailgun from "mailgun-js"

const app = express()
dotenv.config()
connectToDatabase();

app.use(express.json()); 

app.use(cors());

const importPath = "/api/import"
const aboutDataPath = "/Info"

app.use(importPath, ImportData)
app.use(projectRoute)
app.use(aboutDataPath, AboutRoutes)

app.get('/', (req, res) => {
  res.send('running')
})

const mg = mailgun({ apiKey: process.env.MAILAPIKEY, domain: process.env.MAILDOMAIN });

app.use(express.json());

// Set up Nodemailer transporter
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const data = {
    from: `${name} <${email}>`,
    to: 'iii409475@gmail.com', 
    subject: 'Message from Portfolio',
    text: message,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', body);
      res.status(200).send('Email sent successfully');
    }
  });
});

const port = 5000;

app.listen(5000, console.log(`server is running in port ${port}`))
