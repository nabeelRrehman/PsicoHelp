import React from 'react';

import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';

import home from '../../assets/svgs/bulb';
import search from '../../assets/svgs/search';
import msg from '../../assets/svgs/msgs';

import Entypo from 'react-native-vector-icons/Entypo';

function TabBarComponent(props) {
  const {navigation} = props;

  const bottomButtons = [
    {
      name: 'Home',
      route: 'Home',
      text: 'HOME',
    },
    {
      name: 'Search',
      icon: search,
      route: 'Asistencia',
      text: 'CONSULTAS',
    },
    {
      name: 'Sabias',
      icon: home,
      route: 'Sabias',
      text: 'SABIAS QUE',
    },
    {
      name: 'Message',
      icon: msg,
      text: 'FORO',
      route: 'ForoSecond',
    },
  ];

  const BottomNavigateButton = ({index, route, icon, onPress, text}) => (
    <TouchableOpacity
      key={index}
      onPress={() => navigation.navigate(route)}
      style={styles.navigationBtn}>
      {icon ? (
        <SvgXml xml={icon} />
      ) : (
        <View
          style={{
            padding: 5,
            borderRadius: 30,
            backgroundColor: '#927292',
            marginVertical: 6,
          }}>
          <Entypo name={'home'} color={'#fff'} size={20} />
        </View>
      )}
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.bar}>
      {bottomButtons.map((item, index) => (
        <BottomNavigateButton {...item} key={item.name} index={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 60,
    elevation: 8,
    flexDirection: 'row',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },

  textStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#422646',
  },

  image: {
    height: 37,
    width: 37,
    resizeMode: 'contain',
  },

  navigationBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabBarComponent;
