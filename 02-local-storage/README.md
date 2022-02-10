# Let's load some data!

This section explores local storage, one way of storing data in a PWA.

## Pros
- Already built-in browsers.
- Synchronous!
- Fast!

## Cons
- Because every call is synchronous, using local storage leads to blocking in your app. 
- Not suitable for large chunks of data, only for really tiny miney values, such as ids. 
- Not accessible is in a service worker 😕

## Furthermore
Eeach value in the local storage is a string (meaning that non-string values will be stringified).