import React, { useState } from "react";
import {  Modal, StyleSheet, View } from "react-native";
import Tabs from "./Tabs";


const ModalFilters = ({modalState, setOpenModal}) => {
  
  const [authorSelected, setAuthorSelected] = useState([]);
  const [genreSelected, setGenreSelected] = useState([]);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalState}
        onRequestClose={() => {
          setOpenModal(!modalState);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Tabs/>
            
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
    
  },
  modalView: {
    margin: 20,
    backgroundColor: "#090a2c",
    borderRadius: 20,
    
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: 'white' 
  }
});

export default ModalFilters;