# [Introduction to PWAs](https://fireship.io/courses/react/basics-pwa/)

**Prograssive Web Apps** are an awesome alternative to building native Android/IOS applications without that **30%** cut that Google/Apple takes from your revenue.

- With Vite, you have to install `vite-plugin-pwa` to get PWA features

  - [**vite-plugin-pwa** Guide](https://vite-pwa-org.netlify.app/guide/)
  
- `create-react-app` already has a PWA template

## PWA Features

- Offline Mode
- Add to Homescreen
- Push Notifications
- Works on most native devices

## PWA Stuff

- App Manifest: `manifest.json`
- **Chrome Lighthouse**: Run audits on your PWA
- Service Workers: `sw.js`, are the backbone of PWAs
- **Workbox**

## [Getting started with Workbox](https://web.dev/learn/pwa/workbox)

Production-ready service worker libraries and tooling.

[Workbox Docs](https://developer.chrome.com/docs/workbox)

### Install `workbox-cli`

```shell
npm install -g workbox-cli
```

### Import workbox

```javascript
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');
```

### Create service worker with Workbox

```shell
npx workbox-cli wizard
```

## Generating icons of different sizes

```shell
npx pwa-asset-generator ./icon.png ./icons
```

`NOTE`: This is a starter project without the vite-plugin-pwa! Just trying to understand the basics of PWAs. It's not working as expected! Let's go with the plugin next time... lol ;)

## Until next time...

## ;)
