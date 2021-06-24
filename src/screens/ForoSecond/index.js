import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import logo from '../../assets/svgs/appIconShort';
import {SvgXml} from 'react-native-svg';

const ForoSecond = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainview}>
      <View style={styles.txtstyle}>
        <Text style={styles.heading}>{'FORO'}</Text>
      </View>

      <ScrollView>
        <View style={styles.logo}>
          <SvgXml xml={logo} />

          {/* <Text style={styles.list}>{'Post Semana 17-23 mayo'}</Text> */}
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Foro')}>
          <View style={styles.secondList}>
            <Text style={styles.Secondtxt}>
              {'Mi día a día con bipolaridad'}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.ThirdList}>
          <Text style={styles.Thirdtxt}>{'Como vivir con un TOC'}</Text>
        </View>

        <View style={styles.FourthList}>
          <Text style={styles.Fourthtxt}>{'Problemas de pareja'}</Text>
        </View>

        <View style={styles.FifthList}>
          <Text style={styles.FifthTxt}>{'Como enfrentarse a las Fobias'}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {flex: 1, backgroundColor: '#F0F0F0', marginBottom: 20},
  txtstyle: {alignItems: 'center', backgroundColor: '#98819C', padding: 10},
  heading: {fontSize: 24, color: 'white', fontWeight: 'bold'},
  logo: {alignItems: 'center', paddingVertical: 20},
  imglogo: {width: 140, height: 80},
  list: {marginTop: 20, marginBottom: -10},
  secondList: {backgroundColor: '#927292', padding: 10},
  Secondtxt: {color: 'white', paddingLeft: 10},
  ThirdList: {backgroundColor: '#BEACBE', padding: 10, marginTop: 10},
  Thirdtxt: {color: 'white', paddingLeft: 10},
  FourthList: {backgroundColor: '#927292', padding: 10, marginTop: 10},
  Fourthtxt: {color: 'white', paddingLeft: 10},
  FifthList: {backgroundColor: '#BEACBE', padding: 10, marginTop: 10},
  FifthTxt: {color: 'white', paddingLeft: 10},
  CreateDiscuss: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 40,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  Discusstxt: {color: '#927292', paddingLeft: 10},
  ButtonView: {
    borderRadius: 40,
    backgroundColor: '#927292',
    marginTop: 10,
    // marginLeft: 220,
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    // alignItems: 'center',
    marginRight: '15%',
  },
  ButtonTxt: {color: 'white', fontWeight: 'bold'},
  textInputStyle: {
    marginHorizontal: 30,
    marginTop: 100,
    height: 40,
    width: '80%',
    backgroundColor: '#f7f7f7',
  },
});

export default ForoSecond;
