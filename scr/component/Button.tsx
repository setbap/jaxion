import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { string } from "react-native-redash";
interface ButtonProps {
  onPress?: () => void;
  varient: "primary" | "default";
}
const Button = ({ onPress, varient }: ButtonProps) => {
  const varientColor = varient === "primary" ? "#fff" : "#4a7";
  const varientBgColor = varient === "primary" ? "#579" : "#eee";
  const varientText = varient === "primary" ? "let's go" : "Next";
  return (
    <RectButton
      onPress={onPress}
      style={[styles.container, { backgroundColor: varientBgColor }]}
    >
      <Text style={[styles.text, { color: varientColor }]}>{varientText}</Text>
    </RectButton>
  );
};

Button.defaultProps = {};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 25,
    overflow: "hidden",
    width: 250,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "SF-Bold",
    fontSize: 18,
  },
});
