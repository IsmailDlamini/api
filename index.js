/* eslint-env node */
import express from "express"
import cors from "cors"
import connectToDatabase from "./MongoDB/mongoSetup.js"
import dotenv from "dotenv"
import ImportData from "./Data/DataImport.js"
import projectRoute from "./Routes/ProjectRoutes.js"
import AboutRoutes from "./Routes/AboutRoutes.js"
import mailgun from "mailgun-js"
import languageRoute from "./Routes/LanguageRoutes.js"
import contactRoute from "./Routes/ContactRoutes.js"

const app = express()
dotenv.config()
connectToDatabase();

app.use(express.json()); 
// IMPORT THE BODY PARSER FOR THE INFORMATION BODY INFORMATION 
// AND IMPORT THE FORM PARSER TOO, INSTALL IF NECESSARY

app.use(cors());  // setup cors to the portfolio frontend and the admin frontend after hosting of admin panel

const importPath = "/api/import"
const projectsMainRoute = "/api/Projects"
const languagesMainRoute = "/api/Languages"
const contactsMainRoute = "/api/Contacts"
const aboutMainRoute = "/api/About"

app.use(importPath, ImportData)
app.use(projectsMainRoute, projectRoute)
app.use(languagesMainRoute, languageRoute)
app.use(contactsMainRoute, contactRoute)
app.use(aboutMainRoute, AboutRoutes)

app.get('/', (req, res) => {
  res.send('The api is running')
})

const mg = mailgun({ apiKey: process.env.MAILAPIKEY, domain: process.env.MAILDOMAIN });

app.use(express.json());

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

app.listen(port, console.log(`server is running in port ${port}`))
