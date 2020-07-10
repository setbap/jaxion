import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { interpolate, Extrapolate } from "react-native-reanimated";

interface DotProps {
  currentIndex: Animated.Node<number>;
  index: number;
}

const Dot = ({ currentIndex, index }: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1.2, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={[styles.dot, { transform: [{ scale: scale }], opacity }]}
    />
  );
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    margin: 4,
    borderRadius: 8,
    backgroundColor: "red",
  },
});
