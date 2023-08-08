This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Live deployment link

[Next.js](https://nextjs-course-rgte2f683-iasiko.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## MongoDB Integration

This project utilizes the MongoDB database for data storage and retrieval. To integrate MongoDB into your project, follow these steps:

Install the MongoDB driver using your package manager of choice:

npm install mongodb
# or
yarn add mongodb
# or
pnpm install mongodb

## Static Functions
This project also takes advantage of Next.js's static functions for dynamic routing and pre-rendering. To create static pages, follow these steps:

Create a function inside the pages directory (e.g., getStaticProps or getStaticPaths) to fetch or generate data for your static page.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

