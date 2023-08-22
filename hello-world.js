//1----------------------------------------------------------//
console.log("HELLO WORLD")


//2----------------------------------------------------------//
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


//3----------------------------------------------------------//
const fs = require('fs');
const content = 'Hello Node';
fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File "welcome.txt" created successfully.');
  }
});

fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('Contents of "welcome.txt":', data);
    }
});


//4----------------------------------------------------------//
const generatePassword = require('generate-password');
const generateRandomPassword = () => {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
  });
  console.log('Generated Password:', password);
}
generateRandomPassword();


//5----------------------------------------------------------//
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'sender-email-service',
  auth: {
    user: 'sender-email@example.com',
    pass: 'sender-email-password',   
  },
});

const mailOptions = {
  from: 'sender-email@example.com', 
  to: 'recipient@example.com',    
  subject: 'Test Email',          
  text: 'Hello from Node.js!',    
  html: '<b>Hello from <i>Node.js</i>!</b>',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});