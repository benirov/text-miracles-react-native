import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet, ImageBackground} from 'react-native';
const DetailsScreen = ({navigation, route}) => {
  const card = route.params;

  return (
    <SafeAreaView style={style.container}>
      
          <ImageBackground source={{uri: card.image}}   style={style.backgroundImage} imageStyle={{opacity:0.5}}>
        <View>
        <ScrollView>
          <View
            style={{
              
              marginTop: 5,
              
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: '#fff'}}>
              {card.title}
              {"\n"}
            </Text>
            <View>
              <Text
                style={{
                  color: '#fff',
                }}>
                {card.author}
              </Text>
            </View>
          </View>
          
          <View style={{paddingHorizontal: 20, marginTop: 10}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                lineHeight: 22,
                marginTop: 10,
              }}>
              {card.texto}
              {"\n"}
            </Text>
          </View>
          </ScrollView>
        </View>
        </ImageBackground>
      
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090a2c',
    },
  backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
});

export default DetailsScreen;