//import express to use express methods and properties
import express from 'express';

//create an instance of express
const app = express();

//use express.json() to parse incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //parse incoming requests with urlencoded payloads

//catch all routes that are not defined to avoid running into errors when a route is not defined
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Path does not found, try again' });
});

export default app; //export app to be used in other files
