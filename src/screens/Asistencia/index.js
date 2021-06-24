import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import alicia from '../../assets/images/alicia.jpg';
import dani from '../../assets/images/dani.jpg';
import jenny from '../../assets/images/jenny.jpg';
import jenna from '../../assets/images/jenna.jpeg';
import julia from '../../assets/images/julia.jpg';
import ModalPopUp from '../../component/popUpModal';

const list = [
  {
    id: '0',
    text1: 'Pedro Luis García',
    text2: 'PSICOLOGO CLINICO',
    img: alicia,
  },
  {
    id: '1',
    text1: 'Ana Ramas Sánchez',
    text2: 'TOXICOMANIAS',
    img: dani,
  },
  {
    id: '2',
    text1: 'Luis Ferrándiz Montalban',
    text2: 'PSICOLOGO CLINICO',
    img: jenny,
  },
  {
    id: '3',
    text1: 'Eva de la fuente Báez',
    text2: 'PSIQUIATRA',
    img: jenna,
  },
  {
    id: '4',
    text1: 'Cristian Anglada Muntaner',
    text2: 'MODERADOR DEL FORO',
    img: julia,
  },
];

const Asistencia = () => {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);

  const modalToggle = () => setModal(!modal);

  return (
    <View style={{flex: 1, backgroundColor: '#F0F0F0'}}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#967F9A',
          padding: 10,
          marginBottom: 20,
        }}>
        <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
          {'Asistencia'}
        </Text>
      </View>

      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => modalToggle()}>
              <View
                style={{
                  marginHorizontal: 20,
                  backgroundColor: '#AE9CB1',
                  flexDirection: 'row',
                  borderTopLeftRadius: 60,
                  borderBottomLeftRadius: 60,
                  marginBottom: 10,
                }}>
                <Image
                  source={item.img}
                  style={{
                    borderRadius: 60,
                    width: 80,
                    height: 80,
                    borderColor: '#98809C',
                    borderWidth: 3,
                  }}
                />
                <View style={{justifyContent: 'center', paddingHorizontal: 20}}>
                  <Text style={{fontWeight: 'bold'}}>{item.text1}</Text>

                  <Text
                    style={{paddingTop: 10, fontSize: 17, fontWeight: 'bold'}}>
                    {item.text2}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <ModalPopUp visible={modal} onToggle={() => modalToggle()} />
    </View>
  );
};

export default Asistencia;
