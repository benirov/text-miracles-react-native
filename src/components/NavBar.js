import React from 'react';
import { StyleSheet, Image } from 'react-native'
import { Appbar } from 'react-native-paper';

const NavBar = () => {
    return ( 
        <Appbar.Header style={styles.container} >
            <Image  source={ {uri: 'https://raw.githubusercontent.com/benirov/textviewsreact/main/src/assets/images/logo.jpg'}}  style={styles.logo}/>
        </Appbar.Header>
     );
}
 
export default NavBar;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#090a2c',
        backgroundColor: '#090a2c',
        height: 150,
    },
    logo: {
        width:150,
        height: 150,
    },
  });