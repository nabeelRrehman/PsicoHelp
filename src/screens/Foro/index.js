import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import homewall from '../../assets/images/Grupo9.png';
import appIcon from '../../assets/svgs/appIconShort';

import {SvgXml} from 'react-native-svg';

const Foro = () => {
  const card = text => {
    return (
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.titleTxt}>{text}</Text>
        </View>
        <View>
          <Text style={styles.description}>
            {
              'Después de 10 años intentando entender por qué, estando totalmente sobria, pasaba de bailar en la barra de una discoteca sola a querer estampar mi auto contra un árbol, me diagnosticaron con trastorno bipolar.'
            }
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={homewall}
        style={{
          zIndex: -1,
          opacity: 1,
          width: '100%', // applied to Image
          height: '100%',
        }}
        imageStyle={{
          resizeMode: 'contain', // works only here!
        }}>
        <View style={{flex: 1}}>
          <View style={styles.txtstyle}>
            <Text style={styles.heading}>{'FORO'}</Text>
          </View>
          <View style={styles.imageIcon}>
            <SvgXml xml={appIcon} />
          </View>

          <View style={styles.title}>
            <Text style={styles.textStyle}>
              {'Mi día a día con bipolaridad'}
            </Text>
          </View>

          <ScrollView contentContainerStyle={{flex: 1}}>
            {card('Marta, 29 Madrid')}
            {card('Jordi, 25 Barcelona')}
            {card('Joan, 39 Barcelona')}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4CFD2',
  },

  imageIcon: {
    alignSelf: 'center',
    paddingVertical: 30,
  },

  title: {
    backgroundColor: '#967F9A',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  textStyle: {
    color: '#fff',
    fontSize: 16,
  },

  cardContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginTop: 10,
    marginHorizontal: 15,
  },

  titleTxt: {
    color: '#967F9A',
    marginBottom: 5,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 12,
    color: '#a193a3',
    paddingHorizontal: 5,
  },

  txtstyle: {alignItems: 'center', backgroundColor: '#98819C', padding: 10},
  heading: {fontSize: 24, color: 'white', fontWeight: 'bold'},
});

export default Foro;
