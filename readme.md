
# Bitmoji Friends 

A simple web app to search for Bitmoji friend strips, given 2 Bitmoji IDs.

Based on the info from [JoshCheek/bitmoji](https://github.com/JoshCheek/bitmoji).

## Getting started

Download a copy of the tempalates from the Bitmoji API;

```
curl -o dist/templates.json https://api.bitmoji.com/content/templates?app_name=bitmoji&platform=ios
```

Install the dependencies

```
npm install
```

Configure your Bitmoji IDs by creating a `.config.js` file in the project root.

```
// Should be in the format XXXXXXXXX_XX-sX
export default {
    me: '[BITMOJI ID #1]',
    you: '[BITMOJI ID #2]'
}
```


Build the app

```
npm run dev
```

