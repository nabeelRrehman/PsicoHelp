import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';

import employee1 from '../../assets/images/employee1.png';
import homewall from '../../assets/images/Grupo9.png';

const Messenger = () => {
  return (
    <View style={styles.MainView}>
      <View style={styles.HeaderView}>
        <View style={styles.HeaderImgView}>
          <Image source={employee1} style={styles.ImgStyling} />
        </View>

        <View style={styles.OnlineStatus} />

        <View style={styles.TxtStyleView}>
          <Text style={styles.TxtStyle}>{'ELOISA ARREGUL SOTO'}</Text>
        </View>
      </View>

      <ScrollView>
        <ImageBackground
          source={homewall}
          style={styles.ImageBackground}
          imageStyle={{
            resizeMode: 'contain', // works only here!
          }}>
          <View style={styles.ChatView1}>
            <Text style={styles.ChatTxt1}>
              {'Beinvenido a PsicoHelp, estamos para ayudarte....'}
            </Text>

            <Text style={styles.ChatTxtTime1}>{'2:20'}</Text>
          </View>

          <View style={styles.ChatView2}>
            <Text style={styles.ChatTxt2}>
              {
                'Tengo un problema de control de las emociones y me cuesta mucho relacionarme en entornos donde hay mucha gente!'
              }
            </Text>

            <Text style={styles.ChatTxtTime2}>{'2:22'}</Text>
          </View>

          <View style={styles.ChatView3}></View>

          <View style={styles.TextBox}>
            <TextInput keyboardType={'default'} />
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {flex: 1, backgroundColor: '#EBE8EB'},
  HeaderView: {backgroundColor: '#98819C', padding: 6, flexDirection: 'row'},
  HeaderImgView: {marginLeft: 10},
  ImgStyling: {borderRadius: 50},
  OnlineStatus: {
    width: 10,
    height: 10,
    borderRadius: 50,
    zIndex: 1,
    position: 'absolute',
    left: 65,
    top: 48,
    backgroundColor: '#95F139',
  },
  TxtStyleView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    paddingRight: 10,
  },
  TxtStyle: {fontSize: 18, color: 'white', fontWeight: 'bold'},
  ImageBackground: {zIndex: 1, opacity: 10, width: '100%', height: '100%'},
  ChatView1: {
    width: '90%',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#E6E0E6',
    borderColor: '#98819C',
  },
  ChatTxt1: {color: '#98889A'},
  ChatTxtTime1: {paddingLeft: 280, color: '#98889A', marginTop: 5},
  ChatView2: {
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  ChatTxt2: {color: '#907592'},
  ChatTxtTime2: {paddingLeft: 250, color: '#98889A', marginTop: 5},
  ChatView3: {
    width: '90%',
    height: 60,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#E6E0E6',
    borderColor: '#98819C',
  },

  TextBox: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    height: 100,
    marginTop: 100,
  },
});

export default Messenger;
