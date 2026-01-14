# localStorage in PWAs

This project explores localStorage and demonstrates how to use it in a Progressive Web App for client-side data persistence.

> **localStorage** is a web storage API that allows you to store key-value pairs in a web browser with no expiration date. Data persists even when the browser is closed and reopened, making it ideal for saving user preferences, simple app state, and small amounts of data.

![screenshot of the todos app](./assets/screenshot-todos.png)

### Start the app

Run `npm run start` to start the application using `http-server`.

The app will be available at `http://localhost:8080`

## Todos Application Features

![screenshot of the todos app](./assets/screenshot-todos.png)

### Todo List Functionality

Add items to your todo list, view them in a simple list format, and have them persist across browser sessions thanks to localStorage.

### PWA Setup

Includes a basic setup of a service worker for offline support and fast loading, showcasing a key aspect of Progressive Web Apps.

## Pros 👍

- Already built-in browsers, without needing extra plugins.
- Synchronous! Executes data operations in order, ensuring immediate and predictable access
- Speed! Quick data retrieval and storage, ideal for small-scale data management.

## Cons 👎

- Synchronous calls in ;localStorage can cause blocking, potentially slowing down your app.
- Not suitable for large chunks of data, only for tiny values, such as IDs.
- Not accessible is in a service worker 😕 limiting its utility in certain PWA features.

## Data Handling in localStorage

- Each value in localStorage is stored as a string. Non-string values are automatically converted (stringified) when stored.
- In our app, todo items are stored as an array of strings,
