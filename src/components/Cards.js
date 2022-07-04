import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground
} from 'react-native';


import { TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../const/colors.js';
const width = Dimensions.get('window').width / 2 - 30;


export default function Card(props) {

  const {card, navigation} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Details', card)}>
      <View style={style.card}>
      <ImageBackground source={{uri: card.image}} imageStyle={{ borderRadius: 6}} resizeMode="cover" style={style.image}>
        <View
          style={{
            height: 100,
            alignItems: 'center',
          }}>
        </View>

        <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10, color: '#fff'}}> 
          {card.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 3,
          }}>
        </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({  
  card: {
    backgroundColor: COLORS.light,
    width,
    
    borderRadius: 10,
    marginBottom: 20,
    
  },
  image: {
    justifyContent: "center",
    padding: 10,
  }
});