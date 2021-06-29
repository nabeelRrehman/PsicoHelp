import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
} from 'react-native';

import homewall from '../../assets/images/Grupo9.png';
import mastercard from '../../assets/images/mastercard.png';
import visa from '../../assets/images/visa.png';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Payments = () => {
  return (
    <View style={styles.MainView}>
      <View style={styles.MainTxtView}>
        <Text style={styles.MainHeadingText}>{'PAGOS'}</Text>

        <View style={styles.VectorStyling}>
          <FontAwesome name={'reorder'} size={25} color={'white'} />
        </View>
      </View>

      <ImageBackground
        source={homewall}
        style={styles.ImageBackground}
        imageStyle={{
          resizeMode: 'contain', // works only here!
        }}>
        <View style={styles.SubHeadingView}>
          <View style={styles.SubHeadingTxtView}>
            <Text style={styles.SubHeadingTxt}>{'Resumen'}</Text>
          </View>

          <View style={styles.SubHeadingView2}>
            <Text style={styles.SubHeadingTxt2}>
              {'24 Horas de asistencia Psicológica'}
            </Text>
          </View>
        </View>

        <View style={styles.MidHeading}>
          <Text style={styles.MidHeadingTxt}>{'Realizar pago.'}</Text>
        </View>

        <View style={styles.TextInput1}>
          <TextInput
            keyboardType={'default'}
            placeholder={'Número da la tarjeta'}
            placeholderTextColor={'black'}
            style={styles.PlaceholderStyle}
          />
        </View>

        <View style={styles.TextInput2}>
          <TextInput
            keyboardType={'default'}
            placeholder={'Nombre'}
            placeholderTextColor={'black'}
            style={styles.PlaceholderStyle2}
          />
        </View>

        <View style={styles.MergeViews}>
          <View style={styles.TextInput3}>
            <TextInput
              keyboardType={'default'}
              placeholder={'Fecha de caducidad 11/24'}
              placeholderTextColor={'black'}
              style={styles.PlaceholderStyle3}
            />
          </View>

          <View style={styles.TextInput4}>
            <TextInput
              keyboardType={'default'}
              placeholder={'CVV'}
              placeholderTextColor={'black'}
              style={styles.PlaceholderStyle4}
            />
          </View>
        </View>

        <View style={styles.PaymentMethodView}>
          <Image source={mastercard} style={styles.mastercardStyling} />

          <Image source={visa} style={styles.VisaStyling} />
        </View>

        <View style={styles.ButtonView}>
          <Text style={styles.ButtonText}>{'PAGAR'}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {flex: 1},
  MainTxtView: {
    alignItems: 'center',
    backgroundColor: '#98809C',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  MainHeadingText: {fontSize: 24, color: 'white', fontWeight: 'bold'},
  VectorStyling: {position: 'absolute', zIndex: 1, left: 320},
  ImageBackground: {zIndex: 1, opacity: 10, width: '100%', height: '100%'},
  SubHeadingView: {marginHorizontal: 20, paddingBottom: 20, marginTop: 20},
  SubHeadingTxtView: {
    backgroundColor: '#967F9A',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  SubHeadingTxt: {fontSize: 18, color: 'white', fontWeight: 'bold'},
  SubHeadingView2: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingBottom: 30,
    paddingTop: 10,
    borderBottomEndRadius: 30,
  },
  SubHeadingTxt2: {fontSize: 15, color: 'black', fontWeight: 'bold'},
  MidHeading: {justifyContent: 'center', alignItems: 'center', marginTop: 20},
  MidHeadingTxt: {fontWeight: 'bold'},
  TextInput1: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    opacity: 0.4,
    marginTop: 20,
  },
  PlaceholderStyle: {paddingVertical: 3, fontWeight: 'bold'},
  TextInput2: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    opacity: 0.4,
    marginTop: 5,
  },
  PlaceholderStyle2: {paddingVertical: 3, fontWeight: 'bold'},
  MergeViews: {flexDirection: 'row'},
  TextInput3: {
    marginLeft: 20,
    backgroundColor: 'white',
    opacity: 0.4,
    marginTop: 5,
    flexGrow: 1,
  },
  PlaceholderStyle3: {paddingVertical: 3, fontWeight: 'bold'},
  TextInput4: {
    marginRight: 20,
    marginLeft: 5,
    alignItems: 'center',
    paddingVertical: 0,
    backgroundColor: 'white',
    opacity: 0.4,
    marginTop: 5,
    flexGrow: 1,
  },
  PlaceholderStyle4: {paddingVertical: 3, fontWeight: 'bold'},
  PaymentMethodView: {flexDirection: 'row', padding: 10, paddingLeft: 20},
  mastercardStyling: {width: 40, height: 20},
  VisaStyling: {width: 40, height: 20, marginLeft: 10},
  ButtonView: {
    marginTop: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 120,
    backgroundColor: '#98809C',
  },
  ButtonText: {justifyContent: 'center', alignItems: 'center', color: 'white'},
});

export default Payments;
