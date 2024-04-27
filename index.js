/* eslint-env node */
import express from "express";
import cors from "cors";
import connectToDatabase from "./MongoDB/mongoSetup.js";
import dotenv from "dotenv";
import ImportData from "./Data/DataImport.js";
import projectRoute from "./Routes/ProjectRoutes.js";
import AboutRoutes from "./Routes/AboutRoutes.js";
import mailgun from "mailgun-js";
import languageRoute from "./Routes/LanguageRoutes.js";
import contactRoute from "./Routes/ContactRoutes.js";
import userRoute from "./Routes/UserRoutes.js";

const app = express();
dotenv.config();
connectToDatabase();
app.use(express.json());
app.use(cors());

app.use("/api/Import", ImportData);
app.use("/api/Projects", projectRoute);
app.use("/api/Languages", languageRoute);
app.use("/api/Contacts", contactRoute);
app.use("/api/About", AboutRoutes);
app.use("/api/Users", userRoute);

app.get("/", (req, res) => {
  res.send("This is Ismail Dlamini's API and it is Running a portfolio and karabo and loyiso");
});

const mg = mailgun({
  apiKey: process.env.MAILAPIKEY,
  domain: process.env.MAILDOMAIN,
});

app.use(express.json());

const port = process.env.PORT || 3000;

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const data = {
    from: `${name} <${email}>`,
    to: "iii409475@gmail.com",
    subject: "Message from Portfolio",
    text: message,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", body);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, console.log(`server is running in port ${port}`));
