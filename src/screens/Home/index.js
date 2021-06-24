import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Img from '../../assets/images/dia-mundial-bipolar.png';
import hand from '../../assets/svgs/hand';
import tag from '../../assets/svgs/tag';
import anonymous from '../../assets/svgs/anonymous';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import manHead from '../../assets/svgs/manHead';

const sliderWidth = Dimensions.get('screen').width;

const Home = () => {
  const navigation = useNavigation();
  const carousel = useRef();
  const [entries, setEntries] = useState([{}, {}]);

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image source={Img} style={{width: '100%', height: '100%'}} />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F0F0F0', position: 'relative'}}>
      {/* <View
        style={{
          position: 'absolute',
          bottom: 0,
        }}>
        <Image
          source={bgImage}
          style={{width: 300, height: 300}}
          resizeMode={'contain'}
        />
      </View> */}
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#967F9A',
          padding: 10,
          marginBottom: 20,
        }}>
        <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
          {'HOME'}
        </Text>
      </View>

      <View>
        <Text style={styles.textStyle}>{'Post del día'}</Text>
      </View>

      <View style={styles.carousel}>
        <Carousel
          ref={carousel}
          data={entries}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth - 20}
        />
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Information')}>
          <View style={styles.card}>
            <SvgXml xml={manHead} />
            <Text style={styles.cardText}>{'Chat Informativo'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Asistencia')}>
          <View style={styles.card}>
            <SvgXml xml={hand} height={50} />
            <Text style={styles.cardText}>{'Solicitar Asistencia'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PlanPremium')}>
          <View style={styles.card}>
            <SvgXml xml={tag} />
            <Text style={styles.cardText}>{'Planes y precios'}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.horizontalLine} />

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.container}>
          <View>
            <Text style={styles.boldTextStyle}>{'Acceder a mi perfil!'}</Text>
          </View>
        </TouchableOpacity>

        <View style={{paddingHorizontal: 10}}>
          <SvgXml xml={anonymous} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#98809c',
  },

  slide: {
    height: 170,
    elevation: 8,
    flexDirection: 'row',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },

  carousel: {
    marginVertical: 15,
  },

  cardText: {
    color: '#fff',
    paddingHorizontal: 10,
    textAlign: 'center',
    marginTop: 5,
  },

  horizontalLine: {
    borderWidth: 4,
    marginHorizontal: 15,
    marginVertical: 15,
    borderColor: '#98809c',
  },

  cardContainer: {
    // flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 15,
    flexDirection: 'row',
  },

  boldTextStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },

  card: {
    backgroundColor: '#98809c',
    paddingVertical: 10,
    alignItems: 'center',
    width: sliderWidth / 3.4,
    borderRadius: 20,
  },

  textStyle: {
    textAlign: 'center',
    fontSize: 17,
    color: '#98809c',
  },
});

export default Home;
