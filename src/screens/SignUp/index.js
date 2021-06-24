import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import logo from '../../assets/svgs/appIcon';
import {useNavigation} from '@react-navigation/native';
import RadioButtonRN from 'radio-buttons-react-native';
import {SvgXml} from 'react-native-svg';

import AntDesign from 'react-native-vector-icons/AntDesign';

const SignUp = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();
  const data = [
    {
      label: 'F',
    },
    {
      label: 'M',
    },
  ];
  const inputFields = [
    {
      placeholder: 'Nombre',
      style: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
      },
    },
    {
      placeholder: 'Apellidos',
      style: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
      },
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#DBD8DA'}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={{flex: 1}}>
          <KeyboardAvoidingView style={{flex: 1}}>
            <View style={{alignItems: 'center', paddingVertical: 40}}>
              <SvgXml
                xml={logo}
                // style={{width: '60%', resizeMode: 'contain'}}
              />
              <Text
                style={{
                  marginTop: 30,
                  fontSize: 20,
                  color: '#3e2142',
                  fontWeight: 'bold',
                }}>
                {'REGISTRATE'}
              </Text>
            </View>

            {inputFields.map(field => (
              <View style={styles.textInputStyle}>
                <TextInput
                  placeholder={field.placeholder}
                  keyboardType={'default'}
                  style={field.style}></TextInput>
              </View>
            ))}

            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  width: '30%',
                  alignSelf: 'center',
                  height: 35,
                  backgroundColor: '#f7f7f7',
                }}>
                <TextInput
                  placeholder={'Edad'}
                  keyboardType={'number-pad'}
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}></TextInput>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '70%',
                  flexGrow: 1,
                }}>
                <View style={{paddingHorizontal: 20}}>
                  <Text style={{fontSize: 18, color: '#867589'}}>{'Sexo'}</Text>
                </View>
                <RadioButtonRN
                  style={{flexDirection: 'row'}}
                  boxStyle={{
                    width: 60,
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                  }}
                  textStyle={{
                    marginLeft: 16,
                  }}
                  deactiveColor={'#fff'}
                  boxDeactiveBgColor={'#fff'}
                  box
                  activeColor={'#98809c'}
                  data={data}
                  selectedBtn={e => console.log(e)}
                />
              </View>
            </View>

            <View style={[styles.textInputStyle, {marginTop: 0}]}>
              <TextInput
                placeholder={'Poblacion (opcional)'}
                keyboardType={'default'}
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  textAlign: 'center',
                }}></TextInput>
            </View>

            <View style={styles.textInputStyle}>
              <View
                style={{
                  position: 'relative',
                }}>
                <View style={{}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      flexGrow: 1,
                      color: '#b4a4b8',
                      textAlign: 'center',
                      marginTop: 7,
                    }}>
                    {'Pais'}
                  </Text>
                </View>

                <View style={{position: 'absolute', right: 15, top: 10}}>
                  <AntDesign name={'caretdown'} color={'#74526f'} />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'column', marginRight: 20}}>
                <Text style={{color: '#28082d'}}>
                  {'Acepto que soy mayor de edad y'}
                </Text>
                <Text style={{color: '#28082d'}}>
                  {'las condiciones de uso'}
                </Text>
              </View>

              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onCheckColor={'#927292'}
                tintColors={{true: '#927292'}}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('TabStackScreens')}>
              <View
                style={{
                  alignItems: 'center',
                  marginHorizontal: 40,
                  backgroundColor: '#816585',
                  borderRadius: 40,
                  padding: 5,
                  marginTop: 20,
                }}>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>
                  {'INICIAR SESION'}
                </Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    marginHorizontal: 30,
    marginTop: 10,
    alignSelf: 'center',
    height: 35,
    width: '80%',
    backgroundColor: '#f7f7f7',
  },
});

export default SignUp;
