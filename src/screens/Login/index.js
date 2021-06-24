import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import homewall from '../../assets/images/Grupo9.png';
import logo from '../../assets/svgs/appIcon';
import fbicon from '../../assets/images/Trazado50.png';
import googleicon from '../../assets/images/Trazado51.png';
import PsicoModal from '../../component/PsicoModal';

import {SvgXml} from 'react-native-svg';

const LogIn = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);

  const modalToggle = () => setModal(!modal);

  return (
    <View style={{flex: 1, backgroundColor: '#D4CFD2'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            paddingTop: 150,
            justifyContent: 'center',
          }}>
          <SvgXml xml={logo} />
        </View>

        <View style={{marginTop: 70}}>
          <TouchableOpacity onPress={() => modalToggle()}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginHorizontal: 40,
                borderRadius: 40,
                padding: 5,
                backgroundColor: '#816585',
              }}>
              <Image source={fbicon} />

              <Text
                style={{marginLeft: 40, fontWeight: 'bold', color: 'white'}}>
                {'INICIO CON FACEBOOK'}
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginHorizontal: 40,
              borderRadius: 40,
              padding: 5,
              backgroundColor: '#816585',
              marginTop: 10,
            }}>
            <Image source={googleicon} />

            <Text style={{marginLeft: 40, fontWeight: 'bold', color: 'white'}}>
              {'INICIO CON GOOGLE'}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'column', marginRight: 20}}>
              <Text>{'Acepto que soy mayor de edad y'}</Text>
              <Text>{'las condiciones de uso'}</Text>
            </View>

            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onCheckColor={'#927292'}
              tintColors={{true: '#927292'}}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 40,
                borderWidth: 2,
                borderColor: '#816585',
                borderRadius: 40,
                padding: 5,
                marginTop: 20,
              }}>
              <Text
                style={{fontWeight: 'bold', color: '#816585', fontSize: 16}}>
                {'QUIERO REGISTRARME'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <PsicoModal visible={modal} onToggle={() => modalToggle()} />
    </View>
  );
};

export default LogIn;
