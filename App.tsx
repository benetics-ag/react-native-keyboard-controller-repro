import React from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAvoidingView, KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


function Example (): React.JSX.Element {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeAreaView} edges={['top' , 'bottom']}>
      <KeyboardAvoidingView behavior="padding" contentContainerStyle={styles.container} style={styles.content} keyboardVerticalOffset={top + bottom}>
        <View style={styles.inner}>
          <TextInput placeholder="Name" style={styles.textInput}  />
          <Button title="Submit" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <Example />
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  content: {
    flex:1,
  },
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default App;
