import React from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import { KeyboardAvoidingView, KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';


function App(): React.JSX.Element {
  return (
    <KeyboardProvider>
      <SafeAreaView style={styles.safeAreaView} edges={['top' , 'bottom']}>
        <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
          <TextInput placeholder="Name" style={styles.textInput}  />
          <Button title="Submit" />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default App;
