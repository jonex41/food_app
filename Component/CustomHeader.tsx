import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import BottomSheet from "./BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";


const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons style={styles.searchIcon} name='search-outline' size={20} color={Colors.medium} />
     <TextInput style={styles.input} placeholder="Restaurants, groceries, dishes"/>
    </View>
    <Link href={'/(modal)/filter'} asChild>
      <TouchableOpacity style={styles.optionButton} onPress={()=>{}} >
        <Ionicons name="options-outline" size={20} color={Colors.primary} />
      </TouchableOpacity>
    </Link>
     </View>
    </View>
  )
}


const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = ()=>{
        bottomSheetRef.current?.present()
  }

  return (
    <SafeAreaView style={styles.safeAre}>
      <BottomSheet ref= {bottomSheetRef}/>
      <View style={styles.container}>
        <TouchableOpacity  onPress={openModal}>
          <Image
            source={require("../assets/images/bike.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.titleContainer}onPress={openModal}>
          <Text style={styles.title}>Delivery . Now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subTitle}>San Francisco, CA</Text>
            <Ionicons
              name="chevron-down-outline"
              size={20}
              color={Colors.primary}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar/>
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  safeAre: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    height: 60,
    backgroundColor: Colors.white,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
  },

  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationName: { 
    flexDirection: "row",
     alignItems: "center"
     },

     searchContainer:{
        height:60,
        backgroundColor: Colors.white,
        paddingHorizontal:20,
        alignItems:'center'

     },
     searchField:{
      flex:1,
      height:45,
      flexDirection:'row',
      backgroundColor:Colors.lightGrey,
      borderRadius:8,
  
      paddingLeft:10, 
      alignItems:'center',
      

     },
     searchSection:{
      flexDirection:'row',
      gap:10,
      flex:1

     },
     optionButton:{
      padding:10,
      borderRadius:50

     },
     input:{
      padding:10,
    
      color:Colors.mediumDark,
      borderRadius:10
     },
     searchIcon:{
      paddingLeft:4

     }
});

