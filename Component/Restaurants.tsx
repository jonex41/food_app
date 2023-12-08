import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { restaurants } from '@/assets/data/home'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Restaurants = () => {
  return (
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={{padding:15}}>
      {restaurants.map((restaurant, index)=>(
      <Link href={'/details'} asChild>
        <TouchableOpacity key={index}>
      <View style={styles.categoryCard} >
      <Image source={restaurant.img} style={styles.image} />
           <View style={styles.categoryBox}>
           <Text style={styles.categoryText}>{restaurant.name}</Text> 
           <Text style={{color:'green'}}>{restaurant.rating} {restaurant.ratings}</Text> 
           <Text style={{color:Colors.medium}}>{restaurant.distance} </Text> 
           </View>
      </View>
      </TouchableOpacity>
      </Link> 
      ))}
    </ScrollView>
  )
}

export default Restaurants

const styles = StyleSheet.create({
    categoryCard:{
        width:300,
        height:250,
        marginEnd:10,
        borderRadius:8,
        backgroundColor:Colors.white,
        elevation:2,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 4,
        },
        shadowOpacity:0.06
    },
    categoryText:{
        paddingVertical:5,
        fontSize:12,
        top:5,
        bottom:5,
        fontWeight:'bold'
    },
    image:{
        flex:5,
        width:undefined,
        height: undefined,
        top:10,
        borderRadius:10
    },
    categoryBox: {
        flex: 2,
        padding: 10,
      },
})