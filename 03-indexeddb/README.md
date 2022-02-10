# Let's load some data!

**IndexedDB** is a super helpful tool to storing data. It's available in all modern browsers.

- Transactional key-value database in the browser
- Transactional -> if one action fails, none of the actions of that transaction are applied
- Stores significant amount of unstructured data, including files & blobs
- Can be accessed asynchronously -> can be accessed by service worker!

In this section we are using a wrapper library called [`Dexie.js`](https://dexie.org/)

## Start the app
To start the app run:
```
npm run start
```