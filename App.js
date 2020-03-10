import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let myname =<Text>110719023 史翊芃</Text>
  return (
    <View style={styles.container}>
      <Text>hello RN!</Text>
      <Text>110719023 史翊芃</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
