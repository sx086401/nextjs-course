# Nextjs-course

## About this project

Study Project by [Next.js Crash Course for Beginners 2021 - Learn NextJS from Scratch in this !00% Free Tutorial!](https://www.youtube.com/watch?v=MFuwkrseXVE)

## Note

- The root component is the `_app.js`
- `getStaticProps` will prepare the data before rendering (SSR)
  - it can be async
  - always return a object with a `props` properity
  - the `props` will be the page's `props`
  - set the server re-pre-generated ever seconds you set in `revalidate`
  - with `revalidate` the page won't stuck in same data
- `getServerSideProps` will run ever time server build the page
  - you get the request from its first parameter `context`
  - for high frequency data change
- `getStaticPaths` is used for `getStaticProps` with dynamic pages
  - `fallback` = true means you just defined some parts of the pages
