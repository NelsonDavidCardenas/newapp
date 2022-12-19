import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Dimensions } from 'react-native';
import * as React from "react"
//import Svg, {Path,Defs,LinearGradient, Stop} from 'react-native-svg';
//const {width, height} =Dimensions.get('window')
import ButtonGradient from './Button';

const SvgComponent = (props) => (
  <svg
    width={390}
    height={450}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse cx={200.5} cy={392} rx={500.5} ry={392} fill="#3AB7D3" />
  </svg>
)


export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitles}>Sing In to your account</Text>
      <TextInput
      placeholder="xxxx@gmail.com"
      style={styles.textInput}/>
      <TextInput
      placeholder="password"
      style={styles.textInput}
      secureTextEntry={true}
      />
      <ButtonGradient/>
      <Text style={styles.subtitles}>Dont't have an account?</Text>
      <Text style={styles.subtitles}>Forgot your password?</Text>
      <SvgComponent style={styles.containerSvg}/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSvg: {
    flex: 1,
  },
  title: {
    fontSize:80,
    color:'#000',
    fontWeight: 'bold',

  },
  subtitles: {
    fontSize:20,
    color:'gray',
  
  },
  textInput:{

    padding:10,
    paddingStart:30,
    with:'80%',
    height:50,
    marginTop:20,
    borderRadius:30,
    backgroundColor:'#fff'

  },
  button: {

  }
});
