// components/EmailTemplate.js
const React = require('react');

const EmailTemplate = ({ name, subject, content, link }) => (
  <html>
    <head>
      <title>{subject}</title>
    </head>
    <body>
      <h1>Hello {name}</h1>
      <p>{content}</p>
      <form action={link} method="POST">
        <input type="text" name="field1" placeholder="Enter something" />
        <button type="submit">Submit</button>
      </form>
    </body>
  </html>
);

module.exports = EmailTemplate;

