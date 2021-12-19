import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function Vendor() {
    return (
        <View style={styles.container} >
            <View style={styles.container2} >
                <Text style={styles.heading}>Register as a seller to get mobile updates</Text>
                <Text style={styles.title}>Name</Text>
                <View style={{paddingLeft:10 , paddingTop:5}}>
                <TextInput
                    style={[styles.input]}
                />
                </View>
                <Text style={styles.title}>Business Name</Text>
                <View style={{paddingLeft:10 , paddingTop:5}}>
                <TextInput
                    style={[styles.input]}
                />
                </View>
                <Text style={styles.title}>Business Domain</Text>
                <View style={{paddingLeft:10 , paddingTop:5}}>
                <TextInput
                    style={[styles.input]}
                />
                </View>
                <Text style={styles.title}>Products Sold</Text>
                <View style={{paddingLeft:10 , paddingTop:5}}>
                <TextInput
                    style={[styles.input]}
                />
                </View>
                <View style={{paddingLeft:100 , paddingTop:25}}>
                <TouchableOpacity style={styles.commandButton} onPress={() => { }} >
                    <Text style={styles.panelButtonTitle}>Register as Seller</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1, 
       backgroundColor: '#E5E5E5',
       justifyContent:"center",
    },
    container2: {
        position: "absolute",
        width: 356,
        height: 660,
        left:18,
        top: 57,
        bottom:57,
        paddingRight:20,
        backgroundColor: '#fff',
        borderRadius: 25,
        opacity:0.7,
    },
    heading: {
        paddingTop:20,
        paddingLeft:10,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 39,
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
        height:40,
        borderColor: "#3282B8",
        boxSizing: "border-box",
        borderRadius: 25,
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
})