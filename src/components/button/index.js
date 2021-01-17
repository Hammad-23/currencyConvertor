import React from "react";
import { TextInput, Text, StyleSheet, View,TouchableOpacity } from "react-native";

export default function AppButton(props) {
    return(
        <TouchableOpacity style={styles.btn} {...props}>
          <Text style={styles.btnText}>
              {props.title}
          </Text>
        </TouchableOpacity>
      
    )
}


const styles = StyleSheet.create({
btn: {
    backgroundColor:'#2196F3',
    height:50,
    width:200,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:12
},
btnText: {
    color: 'white',
    fontSize:18
}
})

