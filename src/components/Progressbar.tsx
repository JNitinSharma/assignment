import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";
interface PropType {
    onAnimationComplete: Function
}
export const ProgressBar = ({onAnimationComplete}:PropType) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 1500,
      useNativeDriver: false,
    }).start(({finished})=>{
        if(finished){
            onAnimationComplete()
        }
    });
  }, []);

  const widthInterpolated = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width: widthInterpolated }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 8,
    width: "75%",
    backgroundColor: Colors.grey,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
  },
  bar: {
    height: "100%",
    backgroundColor: Colors.black,
    borderRadius: 10,
  },
  label: {
    position: "absolute",
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.black,
  },
});