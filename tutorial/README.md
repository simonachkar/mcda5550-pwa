# React PWA 

You can check the full documentation [here](https://create-react-app.dev/docs/making-a-progressive-web-app/)

## Create React App
To install a PWA react app with [`create-react-app`](https://create-react-app.dev/docs/getting-started) run the following command:
```
npx create-react-app my-app --template cra-template-pwa
```
This will generate a react app that is PWA-ready!

## Start the app
To start the app run:
```
npm run start
```

## Testing PWA functionalities
- Note that `create-react-app` uses a library called `Workbox` to manage the service workers. 
- In this case, service workers will not be installed on development (when running `npm run start`).
- You need to build the app and then run it with `serve` in  order to see the service workers in action
- `Workbox` takes care of everything, and it's easier to set up service workers using it.
- [📦 Workbox: JavaScript libraries for Progressive Web Apps](https://github.com/GoogleChrome/workbox)