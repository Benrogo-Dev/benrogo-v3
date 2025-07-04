# Benrogo-v3

Version 3 of the Benrogo project.

![Cloudflare pages status badge](https://img.shields.io/endpoint?url=https://cloudflare-pages-badges.benrogo.workers.dev/?projectName=benrogo-v3)

## Setup

This project is built with Next.js, so you'll need Node.js installed to run it.

- Clone this repository:

  ```bash
  git clone https://github.com/Benrogo-Dev/benrogo-v3.git
  ```

- Install dependencies:

  ```bash
  npm ci
  ```

- Start the development server:

  ```bash
  npm run dev
  ```

### Auth Setup

- Copy `.env.example` to `.env.local`
- **For auth features:**
  - Create a GitHub OAuth application:
    - Application name: (your choice)
    - Homepage URL: (your choice)
    - Callback URL: `http://local.benrogo.net:3000/api/auth/callback/github`
  - Copy the OAuth ID and secret to their respective variables in `.env.local`
  - Generate auth secret:

    ```bash
    npx auth secret
    ```

- Access your local server at: <http://local.benrogo.net:3000>
  - **Note:** This domain points to `127.0.0.1`, so it only works when your
    local server is running.

## Contributing

- Before you contribute, run `npm run build` and `npm run lint` locally to
  make sure there's no build/linter errors. If there are, your PR won't be accepted!
- Fork this repository, make a feature branch, make your changes, and create a
  pull request to merge into `main`
- One or multiple maintainers will review your PR and either approve it or tell you what
  needs fixing
- Never done a pull request? Google it.
