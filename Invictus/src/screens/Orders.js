import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Orders() {
    return (
        <View  style={styles.container} >
            <Text>Customer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#E5E5E5'
    },
})