import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';

const ModalPopUp = ({visible, onToggle}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Modal
        isVisible={visible}
        backdropColor={'transparent'}
        onBackdropPress={onToggle}>
        <View style={styles.modalUI}>
          <View style={styles.backgroundImage}></View>

          <View style={styles.content}>
            <View>
              <Text style={[styles.textStyle, styles.size]}>
                {'ASISTENCIA MÉDICA'}
              </Text>
            </View>

            <View>
              <Text style={[styles.textStyle, styles.descriptionSize]}>
                {
                  'Debe suscribirse a uno de nuestros planes para acceder a un especialista!'
                }
              </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  onToggle();
                  navigation.navigate('PlanPremium');
                }}>
                <View style={styles.planBtn}>
                  <Text style={[styles.textStyle, styles.btnTextStyle]}>
                    {'PLANES'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  size: {
    fontSize: 23,
    fontWeight: 'bold',
  },

  content: {
    flex: 1,
    justifyContent: 'space-evenly',
  },

  descriptionSize: {
    fontSize: 17,
  },

  planBtn: {
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: 'rgba(174,155,177,0.8)',
  },

  btnTextStyle: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  backgroundImage: {
    position: 'absolute',
    width: '100%',
    bottom: 40,
    left: 50,
    height: '100%',
  },

  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },

  modalUI: {
    position: 'relative',
    backgroundColor: 'rgba(97,74,101,0.9)',
    height: 300,
    borderRadius: 50,
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
});

export default ModalPopUp;
