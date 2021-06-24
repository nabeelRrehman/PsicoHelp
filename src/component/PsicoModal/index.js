import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import RadioButtonRN from 'radio-buttons-react-native';

const PsicoModal = ({visible = true, onToggle}) => {
  const navigation = useNavigation();
  const data = [
    {
      label: 'SI',
    },
    {
      label: 'NO',
    },
  ];

  return (
    <View style={styles.container}>
      <Modal
        isVisible={visible}
        backdropColor={'transparent'}
        onBackdropPress={onToggle}>
        <View style={styles.modalUI}>
          <View style={styles.header}>
            <Text style={[styles.textStyle, styles.size]}>
              {'ASISTENCIA MÉDICA'}
            </Text>
          </View>

          <View style={styles.content}>
            <Text style={[styles.textStyle, styles.descriptionSize]}>
              {
                'En PsicoHelp cuidamos tu privacidad, ¿quieres crear tu nickname?'
              }
            </Text>

            <RadioButtonRN
              style={{flexDirection: 'row', width: '100%'}}
              boxStyle={{
                width: '50%',
                backgroundColor: 'transparent',
                borderWidth: 0,
              }}
              textStyle={{
                marginLeft: 20,
              }}
              activeColor={'#98809c'}
              data={data}
              selectedBtn={e => console.log(e)}
            />

            <TextInput
              style={{borderBottomWidth: 1, padding: 0, width: '100%'}}
            />

            <TouchableOpacity
              onPress={() => {
                onToggle();
                navigation.navigate('TabStackScreens');
              }}>
              <View style={styles.planBtn}>
                <Text style={[styles.textStyle, styles.btnTextStyle]}>
                  {'Guardar cambios'}
                </Text>
              </View>
            </TouchableOpacity>
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

  header: {
    backgroundColor: '#98809c',
    width: '100%',
    paddingVertical: 10,
  },

  content: {
    marginTop: 20,
    paddingHorizontal: 50,
    alignItems: 'center',
  },

  size: {
    fontSize: 23,
    fontWeight: 'bold',
  },

  descriptionSize: {
    fontSize: 17,
    color: '#321337',
    fontWeight: 'bold',
  },

  planBtn: {
    marginTop: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: 'rgba(174, 155, 177, 0.8)',
  },

  btnTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },

  modalUI: {
    position: 'relative',
    backgroundColor: '#f0eff0',
    height: 300,
    borderRadius: 50,
    overflow: 'hidden',
    borderColor: '#76427c',
    borderWidth: 1,
    // paddingHorizontal: 40,
  },
});

export default PsicoModal;
