import http from 'http'; // import the http module from node.js core  to create a server  instance
import app from './app'; // import the express app from the app.js file
import connectDB from './services/connectDB';

const PORT = process.env.PORT || 3000; // set the port number to be used by the server instance

/* create a server instance using the http.createServer method
 * there is no right or wrong way to create a server instance  weather using the http.createServer method or the app.listen method
 * I usualy use the http.createServer method because it gives me more control over the server instance like adding a socket.io instance to the server instance
 */
const server = http.createServer(app);

// Adding server instance inside a callback function also gives a flexibility to add more logic before starting the server
const startServer = () => {
  // Listen to the server instance on the specified port number
  connectDB(); // connect to the database  before starting the server
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer(); // start the server instance
