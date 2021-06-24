import React, {useEffect, useRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import jenny from '../../assets/images/jenny.jpg';

const Profile = () => {
  const navigation = useNavigation();
  const textInput1 = useRef();
  const textInput2 = useRef();
  const textInput3 = useRef();
  const input = [
    {
      placeholder: 'David Hurtado Venegas',
      ref: textInput1,
    },
    {
      placeholder: '07 / 03 / 1990',
      ref: textInput2,
    },
    {
      placeholder: '31 Años - Madrid',
      ref: textInput3,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headerTxt}>{'MI PERFIL'}</Text>
      </View>

      <ScrollView>
        <KeyboardAvoidingView>
          <View style={styles.profileImage}>
            <Image source={jenny} style={styles.imageStyle} />

            <Entypo
              name={'new-message'}
              size={18}
              onPress={() => textInput1.current.focus()}
              color={'#98809C'}
              style={{marginTop: -100, marginLeft: -15}}
            />
          </View>
          {input.map(({placeholder, ref}) => (
            <View style={styles.textInputStyle}>
              <TextInput
                ref={ref}
                placeholder={placeholder}
                keyboardType={'default'}
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  paddingHorizontal: 20,
                  textAlign: 'center',
                }}></TextInput>
            </View>
          ))}

          <View style={styles.contact}>
            <Text style={{fontWeight: 'bold', color: '#5D4560', fontSize: 17}}>
              {'CONTACTO:'}
            </Text>
          </View>

          <View style={styles.textInputStyle}>
            <TextInput
              placeholder={'dhurven@gmail.com'}
              keyboardType={'default'}
              style={{
                fontWeight: 'bold',
                color: 'black',
                paddingHorizontal: 20,
                textAlign: 'center',
              }}></TextInput>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          marginTop: 30,
        }}>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          {'**Ver las políticas de privacidad'}
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('PlanPremium')}>
        <View style={styles.description}>
          <Text style={{color: 'white'}}>
            {'Cambiar mi subscripción actual'}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          onPress={() =>
            navigation.navigate('AuthStackScreens', {screen: 'LogIn'})
          }
          style={{fontWeight: 'bold', color: 'black', fontSize: 19}}>
          {'Cerrar Sesión'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F0F0F0', marginBottom: 20},
  head: {alignItems: 'center', backgroundColor: '#98819C', padding: 10},
  headerTxt: {fontSize: 24, color: 'white', fontWeight: 'bold'},
  profileImage: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  imageStyle: {
    width: 110,
    height: 110,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#98819C',
  },
  name: {
    marginHorizontal: 50,
    backgroundColor: 'white',
    padding: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  dob: {
    marginHorizontal: 50,
    backgroundColor: 'white',
    padding: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  address: {
    marginHorizontal: 50,
    backgroundColor: 'white',
    padding: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  contact: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  email: {
    marginHorizontal: 50,
    backgroundColor: 'white',
    padding: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  description: {
    marginHorizontal: 50,
    backgroundColor: '#927292',
    padding: 8,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
  },
  textInputStyle: {
    marginHorizontal: 30,
    height: 40,
    alignSelf: 'center',
    width: '70%',
    marginBottom: 10,
    backgroundColor: '#f7f7f7',
  },
});

export default Profile;
