import { StyleSheet,Text, View } from 'react-native';

export default function NativeFooter() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>All Rights Are reserved by My Restaurant,2022</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  // footerText:{
  //   marginTop:650,
  //   fontSize:15,
  //   backgroundColor:'yellow'
  // }
  footerContainer:{
    flex:0.1,
    backgroundColor:'pink',
 }
});