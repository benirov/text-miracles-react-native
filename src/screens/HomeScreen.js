import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
  
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axiosClient from '../axios/index'; 
import COLORS from '../const/colors.js';
import NavBar from '../components/NavBar.js';
import Cards from '../components/Cards';

const HomeScreen = ({navigation}) => {

    const [texts, savetext] = useState([]);
    const [search, saveSearch] = useState('');
    const [page, savepage] = useState(1);
    const [loadmore, saveloadmore] = useState(false);

    useEffect(() => {
        (async () =>{
            await getTexts(page);
        })()

    }, [page, search]);

    const getTexts = async (page) => {

      if(search != ''){
        saveloadmore(false);
        const textsAPI = await axiosClient.get(`/filter/${search}`);
        savetext(textsAPI.data.textview);  
      }else{
        const textsAPI = await axiosClient.get(`/${page}`);
        parseInt(textsAPI.data.current) < parseInt(textsAPI.data.pages) ? saveloadmore(true) : saveloadmore(false);
        savetext([...texts, ...textsAPI.data.textview]);  
      }
          

    }

    const updateSearch = (search) => {
      if(search == ''){
        savetext([]);  
      }
      saveSearch( search );
    };

    const loadMoreText = () => { 
      let newValue = page+1;
      savepage(newValue);
    }
  return (
      <ScrollView>
        <SafeAreaView
        style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
            <NavBar />
        <View style={{marginTop: 30, flexDirection: 'row'}}>
            
            
        </View>
        <SearchBar
          placeholder="Find by title, author..."
          onChangeText={(e) => updateSearch(e)}
          value={search}
          round={true}
          containerStyle={{backgroundColor: 'white', color: 'white', borderRadius:10}}
          leftIconContainerStyle={{backgroundColor: 'white', color: 'white'}}
          rightIconContainerStyle={{backgroundColor: 'white', color: 'white'}}
          inputContainerStyle={{backgroundColor: 'white', color: 'white'}}
          inputStyle={{backgroundColor: 'white', color: '#white', borderRadius: 5}}
        />

        {texts.length > 0 ? (
                        
                            
                            <FlatList
                            columnWrapperStyle={{justifyContent: 'space-between'}} 
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                            marginTop: 10,
                            paddingBottom: 50,
                            }}
                            keyExtractor={(item) => String(item._id)}
                            numColumns={2}
                            data={texts}
                            renderItem={({item}) => {
                            return <Cards card={item} navigation={navigation} />;
                            }} 
                        />
                            
                       ) : (
                        <View style={[styles.container, styles.horizontal]}>
                            <ActivityIndicator size="large" color="#ffffff"/>
                        </View>
                       ) }

          {loadmore && (
            <View style={style.ButtonSection}>
              <TouchableOpacity
              onPress={() => loadMoreText()}
              style={{
                  borderWidth:1,
                  alignItems:'center',
                  justifyContent:'center',
                  width:30,
                  marginBottom: 10,
                  height:30,
                  backgroundColor:'#fff',
                  borderRadius:50,
                }}
            >
              <Icon
                    name="add" 
                    size={18}
                    />
            </TouchableOpacity>
           </View>
          )}
        </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  ButtonSection: {
    justifyContent: 'center',
    alignItems: 'center'
 }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
export default HomeScreen;