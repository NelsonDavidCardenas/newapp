import react from "react";
import { StyleSheet, Text, View,TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ButtonGradient(){
    return (
        <TouchableOpacity style={styles.container}>
               <LinearGradient
        // Button Linear Gradient
        colors={['#fff','#3AB7D3']}
        start={{x:0,y:0}}
        end={{x:1,y:1}}
        style={styles.button}
        >
        <Text style={styles.text}>Sign in</Text>
      </LinearGradient>
        </TouchableOpacity>


    )
        
    
}

const styles = StyleSheet.create({
container: {
flex: 1,
width:200
},

    text:{
        fontSize:14,
        color: '#fff',
        textAlign: 'center'
    
      },
    button: {
        marginTop:10,
        width:'80%',
        height:50,
        borderRadius:25,
        padding:10
      
    }
  });