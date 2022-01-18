# Social Network API

## Table of Contents
- [Description](#description)
- [Acceptance Criteria](#acceptance criteria)
- [Built With](#installation)
- [Installation](#installation)
- [Demo](#demo)
- [Important Links](#important links)
- [License](#license)


------------------------------------------------------------------------------

## Description
Social Network API is a basic prototype that uses a NoSQL database. <br />

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
------------------------------------------------------------------------------

## Built With

* [Express](https://expressjs.com/)
* [Moment](https://momentjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/docs/models.html)
* [Node](https://nodejs.org/)

------------------------------------------------------------------------------

## Installation
1. Clone the repo
   ```
   git clone https://github.com/jakecolledge97/social-network-database.git
   ```
2. Install NPM packages
   ```
   npm install
   ```
3. Create seeds (if needed)
   ```
   npm run seed;
   ```
4. Start Server
   ```
   npm run start
   ```

------------------------------------------------------------------------------

## DEMO

![Demo 1](https://raw.githubusercontent.com/bajraroshan/social-network-api/master/images/18-nosql-homework-demo-01.gif)
![Demo 2](https://raw.githubusercontent.com/bajraroshan/social-network-api/master/images/18-nosql-homework-demo-02.gif)
![Demo 3](https://raw.githubusercontent.com/bajraroshan/social-network-api/master/images/18-nosql-homework-demo-03.gif)
![Demo 4](https://raw.githubusercontent.com/bajraroshan/social-network-api/master/images/18-nosql-homework-demo-04.gif)

------------------------------------------------------------------------------

## Important Links
Walkthrough Video: https://youtu.be/bkNI_kvtgXs/<br/>
Github Repositories: https://github.com/bajraroshan/social-network-api

------------------------------------------------------------------------------


## License
Copyright (c) [2021] [Roshan Bajracharya]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

![License](https://img.shields.io/badge/license-MIT-blue)