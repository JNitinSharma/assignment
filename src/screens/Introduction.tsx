import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Images } from "../constants/Images"
import { Colors } from "../constants/colors"

const Introduction = ({navigation}:any) =>{
    return(
    <View style={{flex:1}}>
        <View style={style.imgcont}>
        <Image source={Images.introImage} style={style.img} resizeMode='contain' />
        </View>
        <View style={style.textcontainer}>
            <Text style={style.text}>Hi! I am your fashion advisor. Let's get you started with creating your mix & match fashion avatar.</Text>
            <Pressable style={{alignSelf:'flex-end'}} onPress={()=>{navigation.navigate("AddProfile")}}>
            <Image source={Images.arrowcircle} style={style.arrow} resizeMode='contain' />
            </Pressable>
        </View>
    </View>)
}
export default Introduction
const style = StyleSheet.create({
    imgcont:{
        flex:0.9, 
        justifyContent:'flex-end', 
        alignItems:'flex-end'
    },
    img:{
        width:'90%', 
        alignSelf:'flex-end', 
        height:'80%'
    },
    textcontainer:{
        backgroundColor:Colors.white, 
        padding:8,
        marginHorizontal:28,
        alignSelf:'flex-end',
        borderWidth:4,
        borderColor:Colors.grey
    },
    text:{
        fontSize:20,
        lineHeight:32,
        fontWeight:'400',
        color:Colors.black
    },
    arrow:{
        width:48, 
        height:48
    }
})