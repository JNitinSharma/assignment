import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";

interface ButtonProps{
    title : string;
    onPress: () => void;
}

const Button = (props:ButtonProps) =>{
    return(
        <Pressable onPress={props.onPress} style={style.container}>
            <Text style={style.title}>{props.title}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:Colors.black,
        height:48,
        marginHorizontal:24,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:16,
        borderRadius:8
    },
    title:{
        color:Colors.white,
        fontSize:16, 
        fontWeight:'500'
    }
})

export default Button