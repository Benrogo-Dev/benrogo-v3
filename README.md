# Benrogo-v3
Version 3 of the Benrogo proxy project

![Cloudflare pages status badge](https://img.shields.io/endpoint?url=https://cloudflare-pages-badges.benrogo.workers.dev/?projectName=benrogo-v3)

## Development Setup
This project is built on Next.JS, so you'll need to have Node.JS installed to run it!

- To clone this repository, run the following command:
  ```
  git clone https://github.com/Benrogo-Dev/benrogo-v3.git
  ```

- In the repository folder, run `npm ci` to install dependencies

- To spin up a development server, run the command `npm run dev`

- ### Environment variables
  - Copy the `.env.example` file to a file named `.env.local`
  - ### If you're doing anything that needs authentication
    - Create a github OAUTH application and copy the id and secret to their respective variables
      - Application name: anything you want
      - Homepage URL: anything you want
      - Callback URL: `http://local.benrogo.net:3000/api/auth/callback/github`
    - Run the command `npx auth secret` to fill in the `AUTH_SECRET` variable

- To access your local server, go to [http://local.benrogo.net:3000/]()
  - Note: this domain points to `127.0.0.1`, so you will only be able to access it with your local server running!!

# Contributing
- Before you contribute, please run `npm run build` locally to make sure there's no build errors. If there is your PR won't be accepted!
- If you want to contribute to this project, please fork it, make your changes there, and then make a pull request to merge it into main
- The maintainers will review your PR and either approve it or make comments and tell you what you need to fix.
- If you need instructions on how to make a PR, look it up!