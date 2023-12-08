import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";

import { useNavigation } from "expo-router";
import categories from "@/assets/data/filter.json";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
interface Category {
  name: string;
  count: number;
  checked?: boolean;
}
interface Item {
  item: string;
  iconName: any;
}

const Singleitem = ({ item, iconName }: Item) => (
  <>
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.item}>
        <Ionicons name={iconName} size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}>{item}</Text>
        <Ionicons name="chevron-forward" size={22} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  </>
);

const ItemBox = () => (
  <>
    <Singleitem item="Sort" iconName="arrow-down-outline" />
    <Singleitem item="Hygiene rating" iconName="fast-food-outline" />
    <Singleitem item="Offers" iconName="pricetag-outline" />
    <Singleitem item="Dietary" iconName="nutrition-outline" />

    <Text style={styles.header}>Categories</Text>
  </>
);

const Filter = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Category[]>(categories);
  const [selected, setSelected] = useState<Category[]>([]);
  const flexWidth = useSharedValue(0);
  const flexWidthGap = useSharedValue(0);
  const scale = useSharedValue(0);

  useEffect(() => {
    const hasSelected = selected.length > 0;
    const selectedItems = items.filter((item) => item.checked);
    const newSelected = selectedItems.length > 0;
    if (hasSelected !== newSelected) {
      flexWidth.value = newSelected ? 150 : 0;
      flexWidthGap.value = newSelected ? 20 : 0;
      scale.value = withTiming(newSelected ? 1 : 0);
    }
    setSelected(selectedItems);
  }, [items]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: flexWidth.value,
      opacity: flexWidth.value > 0 ? 1 : 0,
    };
  });
  const animatedStylesGap = useAnimatedStyle(() => {
    return {
      width: flexWidthGap.value,
      opacity: flexWidthGap.value > 0 ? 1 : 0,
    };
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const renderItemList: ListRenderItem<Category> = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.itemText}>
        {item.name} {item.count}
      </Text>
      <BouncyCheckbox
        disableBuiltInState
        fillColor={Colors.primary}
        unfillColor={Colors.white}
        iconStyle={{
          borderColor: Colors.primary,
          borderRadius: 4,
          borderWidth: 2,
        }}
        innerIconStyle={{
          borderColor: Colors.primary,
          borderRadius: 4,
          borderWidth: 2,
        }}
        onPress={() => {
          const isChecked = items[index].checked;
          const updatedItems = items.map((item) => {
            if (item.name === items[index].name) {
              item.checked = !isChecked;
            }
            return item;
          });
          setItems(updatedItems);
        }}
        isChecked={items[index].checked}
      />
    </View>
  );

  const handleClearAll = () => {
    const udpatedList = items.map((item) => {
      item.checked = false;
      return item;
    });
    setItems(udpatedList);
  };

  
/*   return (
    <View style={styles.container}>
      <FlatList data={items} renderItem={renderItemList} ListHeaderComponent={<ItemBox />} />
      <View style={{ height: 76 }} />
      <View style={styles.footer}>
        <View style={styles.btnContainer}>
          <Animated.View style={[animatedStyles, styles.outlineButton]}>
            <TouchableOpacity onPress={handleClearAll}>
              <Animated.Text style={[animatedText, styles.outlineButtonText]}>Clear all</Animated.Text>
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity style={styles.fullButton} onPress={() => navigation.goBack()}>
            <Text style={styles.footerText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ); */

   return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        showsVerticalScrollIndicator={false}
        renderItem={renderItemList}
        ListHeaderComponent={<ItemBox />}
      />
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <Animated.View style={[styles.outlineButton, animatedStyles]}>
            <TouchableOpacity onPress={handleClearAll}>
              <Animated.Text style={[animatedText, styles.outlineButtonText]}>
                Clear all
              </Animated.Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[animatedStylesGap,styles.mygap]}/>


        

          <TouchableOpacity
            style={styles.fullButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.footerText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ); 
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: Colors.white,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },

  footerText: {
  
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  btnContainer: {
    flexDirection: 'row',
  
    justifyContent: 'center',
  },
  itemContainer: {
    
    backgroundColor: Colors.white,
    padding: 8,
    borderRadius: 8,
    justifyContent:'center',
    alignItems:'center'
    
  },
  item: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",

    backgroundColor: Colors.white,
    paddingVertical: 10,

    borderColor: Colors.grey,
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  row: {
    
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.white,
  },
  itemText: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
   
    justifyContent:'center'
   
  },
  outlineButton: {
    borderColor: Colors.primary,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,

  
    height: 56,
  },
  fullButton: {
    backgroundColor: Colors.primary,
    justifyContent:'center',
    alignItems: "center",
    borderRadius: 8,

    flex: 1,
    height: 56,
  },
  outlineButtonText: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
  mygap:{
   
    width:20,
   
  }
});
