import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Picker} from 'react-native';
import {Container, Content} from 'native-base';
import Input from '../../components/input';
import AppButton from '../../components/button';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Home({navigation}) {
  return (
    <Container>
      <Content style={{height:'100%'}} >
        <View style={styles.firstHead}>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.convertorContain}>
            <View style={styles.usdLine}>
              <View >
                <Image
                  style={styles.imgFlag}
                  source={require('../../../assets/usFlag.png')}
                />
                <Text>USD:</Text>
              </View>
              <View>
                <Input keyboardType="numeric" />
              </View>
            </View>

            <View style={styles.usdLine}>
              <View>
                <Image
                  style={styles.imgFlag}
                  source={require('../../../assets/usFlag.png')}
                />
                <View style={styles.selectCountry}>
                <Text>USD:</Text>
                <AntDesign name={"down"}size={15} />
                </View>
              </View>
              <View>
                <Input keyboardType="numeric" />
              </View>
            </View>
            <View onTouchEnd={()=>navigation.navigate('CountryList')} style={styles.btnContainer}>
              <AppButton title="Convert" />
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  firstHead: {
    backgroundColor: '#2196F3',
    height: 150,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  usdLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  convertorContain: {
    backgroundColor: '#FFFF',
    width: '90%',
    height: 350,
    marginTop: 40,
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
  },
  boxContainer: {
    alignItems: 'center',
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginLeft:35
  },
  imgFlag: {
    height: 40,
    width: 60,
  },
  selectCountry: {
      flexDirection: 'row',
      alignItems:'center'


  }
});
