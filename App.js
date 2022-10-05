
import React from 'react';
import { StyleSheet, TextInput, View , SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [text, onChangeText] = React.useState("");


  return (
    <SafeAreaView style={styles.container}>
      
      <WebView
        source={
          { uri: `https://dado-chat.mdtamiz.xyz/${text && text.toLocaleLowerCase()}` }
        } />
         <TextInput
        style={styles.inputSearnch}
        onChangeText={onChangeText}
        value={text}
        placeholder="Write a path to go like ( login , signup )"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
    marginTop : 20
  },
  inputSearnch: {
    height: 35,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#00000',
    marginTop: 20,
    marginBottom: 10
  }
});
