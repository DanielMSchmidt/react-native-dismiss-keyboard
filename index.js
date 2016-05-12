import { TextInput } from 'react-native';
const { State: TextInputState } = TextInput;

export default function dismissKeyboard() {
  TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
}
