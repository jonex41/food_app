import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { forwardRef, useCallback, useMemo } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'
import Colors from '@/constants/Colors';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type CustomType = {
    title: string;
    subTitle: string;
    iconName: 'location-outline'|'stopwatch-outline';
}

export type Ref = BottomSheetModal;




const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(()=>['50%'], [])
    const renderBackDrop = useCallback((props : any)=><BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>, [])
  const {dismiss}= useBottomSheetModal();
  const router = useRouter()

  const CustomInput = ({title, subTitle, iconName}: CustomType)=>(
    <View>
        <Text style={styles.subHeader}>{title}</Text>
        
        
            <TouchableOpacity onPress={()=>{
               
                router.push('/(modal)/location-search')
                dismiss()
            }}>
                <View style={styles.items}>
                    <Ionicons name={iconName} size={20} color={Colors.medium} />
                    <Text style={{flex:1}}>{subTitle}</Text>
                    <Ionicons name='chevron-forward' size={20} color={Colors.primary}/>

                </View>
            </TouchableOpacity>
       
       
      
    
    </View>
)


    return (
    <BottomSheetModal 
    overDragResistanceFactor={0}
    backdropComponent={renderBackDrop}
    handleIndicatorStyle={{display:'none'}}
    backgroundStyle={{  backgroundColor:Colors.lightGrey , borderRadius:0}}
    ref={ref} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>

    <View style={styles.toggle}>
    <TouchableOpacity style={styles.toggleActive} onPress={()=>dismiss()}>
      <Text style={styles.activeText}>Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleInActive} onPress={()=>dismiss()}>
      <Text style={styles.inActiveText} >PickUp</Text>
      </TouchableOpacity>
   </View>
   <CustomInput title='Your Location' subTitle='Current Location' iconName='location-outline'/>
   <CustomInput title='Arrival time' subTitle='Now' iconName='stopwatch-outline'/>
      <TouchableOpacity style={styles.button} onPress={()=>dismiss()}>
      <Text style={styles.buttonText}>BottomSheet</Text>
      </TouchableOpacity>
        </View>
    </BottomSheetModal>
  )
})

export default BottomSheet

const styles = StyleSheet.create({
    contentContainer:{
        flex:1

    },
    toggle:{
        flexDirection:'row',
        justifyContent:'center',
        gap:20,
        marginBottom:32



    },
    toggleActive:{
        backgroundColor:Colors.primary,
        paddingHorizontal:30,
        height: 30,
        justifyContent:'center',
        borderRadius:20,


    },
    toggleInActive:{
        backgroundColor:Colors.white,
        paddingHorizontal:30,
        height: 30,
        justifyContent:'center',
        borderRadius:20,

    },
    activeText:{
        color:Colors.white,
        fontWeight:'700'

    },
    inActiveText:{
        color:Colors.primary,
       

    },
    button:{
        backgroundColor: Colors.primary,
        padding:16,
        borderRadius:4,
        margin:16,
        alignItems:'center',
    },
    buttonText:{
        color:Colors.white,
        fontWeight:'bold'
    },

    subHeader:{
        fontSize:16,
        fontWeight:'600',
        margin:16

    },
    items:{
        flexDirection:'row',
        gap:8,
        alignItems:'center',
        backgroundColor: Colors.white,
        paddingVertical:20,
        paddingLeft:15,
        marginHorizontal:10,
        borderRadius:10,
        borderColor:Colors.grey,
        borderWidth:1
    }
})