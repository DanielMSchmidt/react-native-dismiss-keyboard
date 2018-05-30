# react-native-dismiss-keyboard ![CircleCi](https://circleci.com/gh/DanielMSchmidt/react-native-dismiss-keyboard.png?circle-token=905f7ed099611e3f8079a5bf72674beab5e55e50) [![npm version](https://badge.fury.io/js/react-native-dismiss-keyboard.svg)](https://badge.fury.io/js/react-native-dismiss-keyboard) ![Downloads](https://img.shields.io/npm/dm/react-native-dismiss-keyboard.svg)

A simple way to dismiss the keyboard programmatically in a react native application. [A demo app can be found here](https://github.com/DanielMSchmidt/DismissKeyboardExample).

## Deprecated for React Native >= 0.35
This module extracts code from an undocumented React Native feature. The reason I wrote it is that the import of the internal module failed after updating and in some specific setups. The feature is now documented in React Native and may be used directly with the [React Native Keyboard API](https://facebook.github.io/react-native/docs/keyboard.html). If your React Native version is high enough I can only encourage you to use React Natives implementation.

## Web Views
This module targets React Native Views, therefore the solution will not work in React Native Web Views. Please use an [alternative solution](http://stackoverflow.com/questions/8335834/how-can-i-hide-the-android-keyboard-using-javascript) in your Web Views Javascript.

## Add it to your project

1. Run `npm install react-native-dismiss-keyboard --save`
2. To import the library choose one of these options
  - `var dismissKeyboard = require('react-native-dismiss-keyboard');`
  - `import dismissKeyboard from 'react-native-dismiss-keyboard';`
3. Run `dismissKeyboard()` anywhere in your code to close the keyboard.

## Support

| React Native Version          | react-native-dismiss-keyboard Version |
|-------------------------------|---------------------------------------|
| >= 0.11 & < 0.23              | < 1.0                                 |
| >= 0.23                       | >= 1.0                                |
| >= 0.36                       | [React Native Keyboard API](https://facebook.github.io/react-native/docs/0.36/keyboard)|

If you experience any restrictions or if it works on other versions, please let us know.

## Contribution

Please make sure to run the tests before proposing a PR by running `npm test`.
