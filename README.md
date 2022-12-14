# Spotlyzer

## About

Spotlyzer is a web application that displays a Spotify account's most played tracks, artists, and playlists in their library. Spotlyzer accesses this data through the Spotify API which requires OAuth2. This project does not access your Spotify password.

Due to Spotify API's restrictions, hobbyist/school projects are not allowed quota's extensions, meaning that I can have a maximum of 25 regular users.

## Techstack

- JavaScript
- SASS
- React
- NEXT
- Spotify API

## Screenshots

![Mobile View Image](https://i.imgur.com/C1rkJzB.png)
![Destkop View Image](https://i.imgur.com/kTHrQ9J.png)

## Setup Tokens

```
# Configure these tokens using env variables, found in Spotify Developer portal
SPOTIFY_CLIENT_ID=<client_id>
SPOTIFY_CLIENT_SECRET=<client_secret>
```

## Endpoints

```
# Top Tracks
https://localhost:3000/api/tracks
# Top Artists
https://localhost:3000/api/artists
# Playlists
https://localhost:3000/api/playlists

```

<br/>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
