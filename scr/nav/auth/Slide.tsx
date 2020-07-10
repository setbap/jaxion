import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide = ({ label, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - (32 + 88)) / 2 },
    { translateX: right ? width / 2 - 50 : width / -2 + 50 },
    { rotate: "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  titleContainer: {
    // backgroundColor: "white",
    padding: 16,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 80,
    fontWeight: "800",
    fontFamily: "SF-Bold",
  },
});
