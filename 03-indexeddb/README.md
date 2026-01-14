# IndexedDB in PWAs

This project showcases the use of **IndexedDB**, a powerful client-side database for storing structured data in modern web browsers. It features a student list management system with search functionality.

> **IndexedDB** is a low-level API for storing significant amounts of structured data, including files and blobs. Unlike localStorage, it can handle large datasets, supports indexes for fast queries, and works asynchronously.

![screenshot of the students app](./assets/screenshot-students.png)

## Key Features of IndexedDB

- **Transactional Database**: Operates with ACID transactions - if one action fails, none are applied
- **Large Storage Capacity**: Can store hundreds of megabytes (or more depending on browser)
- **Structured Data**: Supports complex data types, objects, arrays, files, and blobs
- **Asynchronous Access**: Non-blocking operations that don't freeze the UI
- **Indexed Queries**: Fast searches using indexes on any property
- **Works in Service Workers**: Unlike localStorage, accessible from service worker context

## Why Use IndexedDB Over localStorage?

| Feature | IndexedDB | localStorage |
|---------|-----------|-------------|
| **Storage Size** | 100s of MB+ | ~5-10 MB |
| **Data Types** | Objects, arrays, blobs | Strings only |
| **Performance** | Async (non-blocking) | Sync (blocking) |
| **Queries** | Indexed searches | Key-only access |
| **Service Worker** | ✅ Yes | ❌ No |
| **Complexity** | Higher learning curve | Very simple |
| **Use Case** | Large datasets, offline-first apps | Small settings, preferences |

## Application Features

- **PWA Setup**: Complete Progressive Web App with service worker for offline support
- **Student Management**: Add students with name, ID, and city
- **Real-time Search**: Filter students by name as you type
- **Persistent Storage**: All data stored in IndexedDB and survives page refreshes
- **Dexie.js**: Uses [`Dexie.js`](https://dexie.org/) library for simplified IndexedDB operations

### About Dexie.js

Dexie.js is a wrapper library that makes working with IndexedDB much easier:
- Simple, promise-based API
- Less boilerplate code
- Better error handling
- Easy schema management

![screenshot of the students app](./assets/screenshot-students.png)

## Running the Application

1. **Installation**:
   - Run `npm install` to install the necessary packages.

2. **Starting the App**:
   - Execute `npm run start` to launch the app using [`http-server`](https://github.com/http-party/http-server#readme).

## Important Note

- **Unique Student IDs:** When entering student data, be aware that the "Student #" is used as the unique `id` in the IndexedDB. If two students are entered with the same "Student #", the existing student data will be overwritten.
