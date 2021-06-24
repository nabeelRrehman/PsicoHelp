import React, {useEffect, useState} from 'react';

import {View, ImageBackground, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import homewall from '../../assets/images/Grupo9.png';
import logo from '../../assets/svgs/appIcon';
import {SvgXml} from 'react-native-svg';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LogIn');
    }, 4000);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#D4CFD2'}}>
      {/* <View> */}
      {/* <ImageBackground
          source={homewall}
          style={{
            zIndex: 1,
            opacity: 10,
            width: '100%', // applied to Image
            height: '100%',
          }}
          imageStyle={{
            resizeMode: 'contain', // works only here!
          }}> */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // marginTop: -30,
        }}>
        <SvgXml xml={logo} />
      </View>
      {/* </ImageBackground> */}
      {/* </View> */}
    </View>
  );
};

export default SplashScreen;
