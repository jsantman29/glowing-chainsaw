# Summary

This is a web application that displays my personal resume. It is designed for both desktop and mobile and attempts to present information in a simple and clean manner.

Technologies used are React, Material-UI, Javascript, and HTML/CSS.

It supports the construction of a Docker image, which consists of the built application being served on port 80 using nginx.

It is currently being hosted on a DigitalOcean Droplet.

# Getting Started

Clone the Git repository in a directory.
If you don't have yarn, run `npm install yarn`.
Then run `yarn` from the project directory.

For linting to run, add SKIP_PREFLIGHT_CHECK=true to
a `.env` file in the directory.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn lint`

Uses the linting rules in the `.eslintrc.js` file to lint the code in `/src`.

### `./deploy-prod.sh`

This script uses the Dockerfile to build a Docker image before transfering and
loading it on a VPS.

Once the image is available on the VPS, another script may be run to make them
live on the web using a web server such as nginx.

For further description, see here:
[https://github.com/jsantman29/vps1-scripts](VPS1 Scripts).

The current configuration attempts to access a VPS that only allows logins with
an approved SSH key.
