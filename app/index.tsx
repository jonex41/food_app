import { View, Text, ScrollView,StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Categories from '@/Component/Categories'
import Colors from '@/constants/Colors'
import Restaurants from '@/Component/Restaurants'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView contentContainerStyle={{paddingBottom:100}} >
      <Categories/>
      <Text style={styles.header}>Top picks in your neighborhoods</Text>
      <Restaurants/>
      <Text style={styles.header}>Offers near you</Text>
      <Restaurants/>
     </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    top:100,
    
    backgroundColor:Colors.lightGrey
  },
  header:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:8,
    marginTop:8,
    paddingHorizontal:16
  }
})

export default App