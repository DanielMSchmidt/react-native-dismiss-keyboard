import { TextInput } from 'react-native'; // eslint-disable-line import/no-unresolved

const { State: TextInputState } = TextInput;

export default function dismissKeyboard() {
  TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
}
