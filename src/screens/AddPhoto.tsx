import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../components/wrapper';
import { Colors } from '../constants/colors';
import Button from '../components/button';
import { useState } from 'react';
import { Images } from '../constants/Images';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const AddProfile = ({navigation}:any) => {
  const [image, setImage] = useState<String>('');

  const OpenCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType:'photo'
      })
      if(result.assets?.length){
        const {uri}:any = result.assets[0]
        setImage(uri)
      }
    } catch (error) {
       console.log(error)
    }
  };

  const OpenGallary = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType:'photo',
        selectionLimit: 1,
      })
      if(result.assets?.length){
        const {uri}:any = result.assets[0]
        setImage(uri)
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <ScreenWrapper>
      <View style={{ flex: 1 }}>
        <Text style={style.headingtext}>FACIAL ATTRIBUTES</Text>
        <Text style={style.heading}>Let's add a Photo </Text>
        <View style={style.buttonCont}>
          {image ? 
          <Image style={style.capturedImage} resizeMode='cover' resizeMethod='resize' source = {{uri:image?.toString()}} />: null}
        </View>
        {image && <Button title="UPLOAD" onPress={() => {navigation.replace('Success')}} />}
        {!image && <View style={style.overlay}>
          <View style={style.iconcont}>
            <View style={style.buttonCont}>
              <Pressable style={style.center} onPress={OpenGallary}>
                <Image source={Images.photo} style={style.icon} />
                <Text style={style.iconText}>From Gallary</Text>
              </Pressable>
            </View>
            <View style={style.buttonCont}>
              <Pressable style={style.center} onPress={OpenCamera}>
                <Image source={Images.camera} style={style.icon} />
                <Text style={style.iconText}>Take a Selfie</Text>
              </Pressable>
            </View>
            <Image />
          </View>
        </View>}
      </View>
    </ScreenWrapper>
  );
};
export default AddProfile;
const style = StyleSheet.create({
  headingtext: {
    color: Colors.darktext,
    fontWeight: '600',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black,
    borderBottomWidth: 1,
    padding: 12,
    paddingHorizontal: 16,
    borderColor: Colors.darktext,
  },
  buttonCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {justifyContent: 'center',
    alignItems: 'center'
  },
  capturedImage:{
    height:200, width:200, 
    borderRadius:100,borderWidth:2, 
    borderColor:Colors.green
  },
  overlay: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  icon: {
    height: 52,
    width: 52,
  },
  iconText: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '700',
    lineHeight: 48,
  },
  iconcont: {
    flexDirection: 'row',
    flex: 0.3,
  },
});
