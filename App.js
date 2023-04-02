// import ContactsList from './components/ContactsList';
// import Contact from './components/Contacts';
// export default ContactsList;
// export {Contact};

import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import NativeHeader from './components/NativeHeader';
import MenuItems from './components/MenuItems';

export default function App() {
    const [text,onTextChange]=React.useState('');
    console.log('text:::',text)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
        
      <NativeHeader />
        <TextInput value={text} onChangeText={onTextChange} style={styles.TextInput}placeholder="Enter Any Text..."/>
        <Text style={styles.text}>{text}</Text>
     {/* <MenuItems /> */}
    </View>
  );
}
const styles = StyleSheet.create({
    TextInput:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        fontSize:16,
        borderColor:'#EDEFEE',
        backgroundColor:'#F4CE14'
    },
    text:{
        fontSize:18,
        fontWeight:700,
        margin:12,
        padding:10,
    }
  });