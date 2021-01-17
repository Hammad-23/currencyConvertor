import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content} from 'native-base';

export default function CountryName(props) {
  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        paddingVertical: 10,
        marginBottom:10
      }}>
      <View style={styles.countryImage}>
        <Image
          resizeMode="contain"
          source={props.flag}
          style={{width: '20%'}}
        />
        <Text style={{width:'40%'}} >{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  countryImage: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10,
    // alignSelf:'center',
    // borderLeftWidth:1,
    borderColor: '#707070',
    justifyContent: 'space-between',
    width: '65%',
    padding: 2,
  },
});
