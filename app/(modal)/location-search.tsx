import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

const LocationSearch = () => {
    const router = useRouter()
    const [location, setLocation] = useState({
        
        latitude:11.124020080830057,
        longitude: 7.726310308702726,
        latitudeDelta:0.02,
        longitudeDelta:0.02
    })

  return (
    <View style={{flex:1}}>
    <MapView style={{flex:1}} region={location}/>
    <View style={styles.absoluteBox}>
       <TouchableOpacity style={styles.button} onPress={router.back}>
       <Text style={styles.buttonText}>Confirm</Text>
       </TouchableOpacity>
    </View>
    </View>
  )
}

export default LocationSearch

const styles = StyleSheet.create({
    absoluteBox:{
        position:'absolute',
        bottom:20,
        width:'100%'
    },
    button:{
        backgroundColor:Colors.primary,
        padding:16,
        margin:16,
        alignItems:'center',
        borderRadius:8,
    }
    ,
    buttonText:{
        color:Colors.white,
        fontWeight:'bold',
        fontSize:16

    }
})