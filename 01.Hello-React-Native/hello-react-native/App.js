import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
      <Text>Hello-React-Native</Text>
      <Text>This is first working react native app</Text>
      <Text>that is it bro well done</Text>
      <Text>that is it bro well done</Text>
      <Text>that is it bro well done</Text>
      <Text>that is it bro well done</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
