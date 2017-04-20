# CTO Hackathon 2017

This code was used to create a Chatbot to talk to IBM Watson Conversation service via NodeRed as part of the RBS CTO Hackathon on 18th and 19th April 2017.

## Usage
GIT Clone the project.

Install the JavaScript dependencies using:

`npm install`

Run the app locally using:

`npm start`

Package up the app for deployment:

`npm build`

To deploy app to AWS S3:

`cd target/dist`
`aws s3 sync . s3://<bucketname> `
