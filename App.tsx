import React from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAvoidingView, KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


function Example (): React.JSX.Element {
  const statusBarHeight = StatusBar.currentHeight ?? 0;  // Always 0 on iOS
  const {top} = useSafeAreaInsets();  // 59 on iOS

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right', 'top']}
      style={styles.safeContainer}>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={0}
        style={styles.content}>
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
  safeContainer: {
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
