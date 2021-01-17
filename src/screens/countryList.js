import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import Input from '../components/input';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import CountryName from '../components/countryName';
import USFlag from '../../assets/usFlag.png';
import AusFlag from '../../assets/aus.png';
import AfgFlag from '../../assets/afg.png';
import PakFlag from '../../assets/pak.png';
import IndFlag from '../../assets/ind.png';

export default function countryList() {
  const countries = [
    {name: 'Afghanistan', image: AfgFlag},
    {name: 'Australia', image: AusFlag},
    {name: 'India', image: IndFlag},
    {name: 'Pakistan', image: PakFlag},
    {name: 'USA', image: USFlag},
  ];
  return (
    <Container>
      <Content>
        <View style={styles.inputContainer}>
          <Input placeholder="Search country" color="" />
        </View>
        <View
          style={{
            marginTop: 40,
            height: '12%',
            width:'95%',
            alignSelf:'center',
            alignItems: 'center',
            backgroundColor: "#FFFF",
            borderRadius: 12,
            borderColor: "lightgray",
            borderWidth: StyleSheet.hairlineWidth,
            shadowColor: "#00000010",
            shadowOpacity: 1,
            shadowRadius: 4,
            elevation: 4,
            shadowOffset: {
              width: 0,
              height: 4,
            },            
            // backgroundColor: '#F8F8F8',
          }}>
          {countries.map((item) => {
            return <CountryName name={item.name} flag={item.image} />;
          })}
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
});
