# Nodejs Demo app

This is a simple node web application. This app displays server details like hostname, time, and user remote IP. It reads the `.env` file and displays the environment variable on the webpage. The environment variable can also manage the webpage's style (FG and BG color).

## Usage

- Run ```npm install``` to download and install all the required dependencies.
- Run ```node index.js``` to run the web application.

## Build and run in docker

- To build docker image ```docker build . -t demoapp```
- To run ```docker run -p 3000:3000 -e FG_COLOR=blue -e BG_COLOR=gray  demoapp```
