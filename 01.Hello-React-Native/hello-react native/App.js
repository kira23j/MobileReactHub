import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableNativeFeedback,View,Image, SafeAreaView,Button, Alert } from 'react-native';

export default function App() {
  return (
  <SafeAreaView style={[styles.container,anotherStyle]}>
<Text>Hello React-Native</Text>
<Text style={styles.Text} >Welcome</Text>
<TouchableNativeFeedback onPress={()=>console.log("touched")}>
<Image 
source={require('./assets/favicon.png')}/>
</TouchableNativeFeedback>
<Button color="cyan" title='click' onPress={()=>Alert.alert("Hello React-Native","verify your gender",[{text:"male",onPress:()=>alert("yap you are a man")},
  {text:"female", onPress:()=>alert("yap you are a lady")}
])}/>
<Button color="orange" title='another one' onPress={()=>Alert.prompt("ur name please","another one")} />
  </SafeAreaView>
     
    

  );
}
const anotherStyle={backgroundColor:"grey"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aquamarine',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
color:'red',
fontStyle:"italic",

  },
});
