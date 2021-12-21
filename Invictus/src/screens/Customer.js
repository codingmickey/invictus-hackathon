import React from 'react'
import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';

export default function Customer() {

    return (
        <View style={styles.container} >
            <StatusBar backgroundColor='#0F4C75' barStyle="light-content"/>
            <ImageBackground source={require('../assets/customer_bg.jpeg')} style={styles.backgroundImage}>
            <View style={styles.header}>
    
            </View>
            <View style={styles.footer} >
                <Text style={styles.heading}> Create a Request</Text>
                <Text style={styles.title}>Product Name</Text>
                <View style={{paddingLeft:10 , paddingTop:5}}>
                <TextInput
                    style={[styles.input]}
                />
                </View>
                <Text style={styles.title}>Quantity</Text>
                <View style={{paddingLeft:10 , paddingTop:5}}>
                <TextInput
                    style={[styles.input]}
                />
                </View>
                <Text style={styles.title}>Desired Price per unit</Text>
                <View style={{paddingLeft:10 , paddingTop:5}}>
                <TextInput
                    style={[styles.input]}
                />
                </View>
                <Text style={styles.title}>Location</Text>
                <View style={{paddingLeft:10 , paddingTop:5}}>
                <TextInput
                    style={[styles.input]}
                />
                </View>
                <View style={{padding:40 , paddingTop:25}}>
                <TouchableOpacity style={styles.commandButton} onPress={() => { }} >
                    <Text style={styles.panelButtonTitle}>Place Order</Text>
                </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1, 
       backgroundColor: '#E5E5E5',
       justifyContent:"center",
    },
    header: {
        flex: 1,
        justifyContent:'center',
        paddingHorizontal: 20,
        paddingBottom: 1,
        alignItems: 'center'
    },
    footer: {
        flex: 3,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 30,
         width: 356,
        left:18,
        backgroundColor: '#fff',
        opacity:0.9,
    },
    heading: {
        paddingTop:20,
        paddingLeft:3,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 38,
        lineHeight: 48,
        color: "#0F4C75",
    },
    title: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 20,
        lineHeight: 30,
        color: "#000000",
        paddingTop:20,
        paddingLeft:10,
    },
    input: {
        color:"#000000",
        paddingLeft:10,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        height:37,
        borderColor: "#3282B8",
        borderRadius: 5,
    },
    commandButton: {
        padding: 15,
        borderRadius: 25,
        backgroundColor: '#0F4C75',
        alignItems: 'center',
        marginTop: 10,
        height:50,
      },
    panelButtonTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color:"#fff",
    },
    backgroundImage:{
        height: '100%',
        width: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent:'center',
        opacity: 0.9,
     },
})