import React, { useState } from "react";
import {  StyleSheet, View, Dimensions } from "react-native";
import { Tab, Text, TabView, CheckBox } from '@rneui/themed';

const Tabs = () => {

    const [index, setIndex] = useState(0);
  return (
    <>
        <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
            backgroundColor: 'white',
            height: 1,
        }}
        variant=""
        >
        <Tab.Item
            title="Authors"
            containerStyle={(active) => ({
              backgroundColor: active ? "white" : undefined,
            })}
            titleStyle={(active) => ({
              fontSize: 12, color: active ? '#090a2c' : 'white'
            })}
            
        />
        <Tab.Item
            title="Genres"
            containerStyle={(active) => ({
              backgroundColor: active ? "white" : undefined,
            })}
            titleStyle={(active) => ({
              fontSize: 12, color: active ? '#090a2c' : 'white'
            })}
        />
        </Tab>

        <TabView value={index} onChange={setIndex} animationType="spring" initialLayout={{ width: Dimensions.get('window').width }}>
            <TabView.Item style={{ backgroundColor: 'white'}}>
            <View style={styles.container}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
              </View>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
              </View>
              
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: 'white'  }}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                  
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
              </View>
            </TabView.Item>
        </TabView>
    </>
  );
}

const styles = StyleSheet.create({  
  view: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default Tabs;