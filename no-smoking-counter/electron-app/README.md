## https://canonium.com/articles/electron-desktop-app-introduction

`$ npm i -g electron-packager`

`
  "scripts": {
    "start": "xo && electron .",
    "test": "xo",
    "build": "electron-packager . myApp --platform=win32 --arch=x64 --version=0.33.3 --app-version=0.1.0 --out=dist --ignore=dist --prune"
  },
`

`$ npm run build`

### Могут быть проблемы с .git - лучше удалить электроновский
