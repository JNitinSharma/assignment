import { Image, StyleSheet, Text, View } from "react-native"
import { Images } from "../constants/Images"
import { ProgressBar } from "../components/Progressbar"
import { Colors } from "../constants/colors"

const SplashScreen = ({navigation}:any) =>{
    return(
        <View style={style.container}>
            <Image source={Images.splash} style={style.image} resizeMode="contain"/>
            <Text style={style.text}>Loading brands...</Text>
            <ProgressBar onAnimationComplete={()=>{ setTimeout(() => {
            navigation.replace("Introduction")
            }, 300)}} />
        </View>
    )
}
export default SplashScreen

const style = StyleSheet.create({
    container:{
        flex:1, justifyContent:'center', alignItems:'center'
    },
    image:{
        height:'50%', width:'70%'
    },
    text:{
        fontSize:20,
        fontWeight:'800',
        color: Colors.black,
        marginBottom:32
    }
})