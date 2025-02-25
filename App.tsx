import React from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {
  KeyboardAvoidingView,
  KeyboardProvider,
} from 'react-native-keyboard-controller';
import {Appbar} from 'react-native-paper';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator<{Example: undefined}>();

function Example(): React.JSX.Element {
  const statusBarHeight = StatusBar.currentHeight ?? 0; // Always 0 on iOS
  const headerHeight = useHeaderHeight();
  const {top} = useSafeAreaInsets();
  console.debug({top, statusBarHeight, headerHeight, os: Platform.OS});
  // iOS:
  //     {"headerHeight": 211, "os": "ios", "statusBarHeight": 0, "top": 59}
  //     211 - 59 = 152, which is the expected AppbarHeader height.
  // Android:
  //     {"headerHeight": 152, "os": "android", "statusBarHeight":
  //     54.095237731933594, "top": 0}
  //     152 is the expected AppbarHeader height.

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={styles.safeContainer}>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={headerHeight + statusBarHeight}
        style={styles.content}>
        <View style={styles.inner}>
          <TextInput placeholder="Name" style={styles.textInput} />
          <Button title="Submit" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Should be 152 dp high:
// https://callstack.github.io/react-native-paper/docs/components/Appbar/
function AppbarHeader(): React.JSX.Element {
  return (
    <Appbar.Header mode="large">
      <Appbar.Content title="Title" />
    </Appbar.Header>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{header: AppbarHeader}}>
            <Stack.Screen name="Example" component={Example} />
          </Stack.Navigator>
        </NavigationContainer>
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
    flex: 1,
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
