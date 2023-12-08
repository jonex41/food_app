import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categories } from '@/assets/data/home'
import Colors from '@/constants/Colors'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{padding:15}}>
      {categories.map((category, index)=>(<View style={styles.categoryCard} key={index}>
            <Image source={category.img} style={styles.image} />
            <Text style={styles.categoryText}>{category.text}</Text>
      </View>))}
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
    categoryCard:{
        width:100,
        height:100,
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
        padding:5,
        fontSize:12,
        top:5,
        bottom:5,
        fontWeight:'bold'
    },
    image:{
        top:10,
        borderRadius:10
    }
})