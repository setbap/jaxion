import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface InOnboarding {}

const Onboarding = () => {
  return (
    <View style={styles.root}>
      <Text style={{ fontFamily: "SF-Regular" }}>Custom font</Text>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "cyan",
  },
});
