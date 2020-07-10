import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../component/Button";

interface SubSlideProps {
  title: string;
  subTitle: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ subTitle, title, last, onPress }: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Button onPress={onPress} varient={last ? "primary" : "default"} />
    </View>
  );
};

export default SubSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "SF-Semibold",
    textAlign: "center",
    padding: 8,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "400",
    color: "grey",
    fontFamily: "SF-Semibold",
    textAlign: "center",
    padding: 8,
  },
});
