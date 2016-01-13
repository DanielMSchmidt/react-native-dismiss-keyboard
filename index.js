import React from 'react-native';

const {
  TextInput: {
    State: TextInputState,
  },
} = React;

export default function dismissKeyboard() {
  TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
}
