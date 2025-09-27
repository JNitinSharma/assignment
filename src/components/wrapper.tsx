import { View } from "react-native"
import { Colors } from "../constants/colors"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const ScreenWrapper = ({children}:any) =>{
    const insets = useSafeAreaInsets()
    return (
    <View style={{flex:1, backgroundColor:Colors.white, paddingTop:insets.top, paddingBottom:insets.bottom}}>
        {children}
    </View>
    )
}
export default ScreenWrapper