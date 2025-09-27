import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import ScreenWrapper from "../components/wrapper"
import { Images } from "../constants/Images"
import { ProgressBar } from "../components/Progressbar"
import { Colors } from "../constants/colors"

const Success = ({navigation}:any) =>{
    return (
        <ScreenWrapper>
            <View style={{flex:1}}>
                <Pressable onPress={()=>{ navigation.goBack()}} style={style.crosscontainer}>
                <Image source={Images.cross} style={style.crossImage} />
                </Pressable>
                <View style={style.textcont}>
                    <Image source={Images.success} style={style.success} />
                    <Text style={style.text}>Selfie captured perfectly!{`\n`}Lets build your own fashion avatar.</Text>
                    <ProgressBar onAnimationComplete={()=>{}} />
                </View>
            </View>
        </ScreenWrapper>
    )
}
export default Success
const style = StyleSheet.create({
    crossImage:{
        height:44, 
        width:44
    },
    crosscontainer:{
        padding:12, 
        alignSelf:'flex-end'
    },
    textcont:{
        flex:0.9, 
        justifyContent:'center', 
        alignItems:'center'
    },
    success:{
        height:150, width:150
    },
    text:{
        marginVertical:48, 
        fontSize:16, 
        textAlign:'center', 
        lineHeight:24, 
        color:Colors.black, 
        fontWeight:'500'
    }
})