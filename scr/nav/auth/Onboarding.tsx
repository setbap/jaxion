import React, { useRef } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Dot from "../../component/Dot";
import Animated, {
  multiply,
  divide,
  min,
  max,
  sub,
} from "react-native-reanimated";
import { useValue, onScrollEvent, interpolateColor } from "react-native-redash";
import SubSlide from "./SubSlide";
const { height, width } = Dimensions.get("window");
interface InOnboarding {}

const slideItems = [
  {
    label: "Relaxed",
    color: "#f9a",
    title: "do it first",
    subTitle: "lorem epasum jaka singa shota movei aspiaun moasdnhu",
  },
  {
    label: "PlayFul",
    color: "#a9f",
    title: "do it first",
    subTitle: "lorem epasum jaka singa shota movei aspiaun moasdnhu",
  },
  {
    label: "Extentric",
    color: "#faf",
    title: "do it first",
    subTitle: "lorem epasum jaka singa shota movei aspiaun moasdnhu",
  },
  {
    label: "Funcky",
    color: "#5ff",
    title: "do it first",
    subTitle: "lorem epasum jaka singa shota movei aspiaun moasdnhu",
  },
];
const slideItemsLength = slideItems.length;
const Onboarding = () => {
  const ref = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slideItems.map((_, index) => index * width),
    outputRange: slideItems.map(({ color }) => color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={ref}
          horizontal
          snapToInterval={width}
          decelerationRate="normal"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
          scrollEventThrottle={1}
        >
          {slideItems.map(({ label }, index) => (
            <Slide {...{ label }} key={label + index} right={index % 2 === 1} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <View
          style={{
            width: width,
            height: 50,
            position: "absolute",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
          }}
        >
          {slideItems.map((_, index) => (
            <Dot currentIndex={divide(x, width)} index={index} key={index} />
          ))}
        </View>

        <Animated.View style={[styles.footerFill, { backgroundColor }]} />
        <Animated.View
          style={[
            styles.footerFillFull,
            { width: slideItemsLength * width, flex: 1 },
            { transform: [{ translateX: multiply(x, -1) }] },
          ]}
        >
          {slideItems.map(({ subTitle, title }, index) => (
            <SubSlide
              onPress={() => {
                if (ref.current !== null && index !== slideItems.length - 1) {
                  ref
                    .current!.getNode()
                    .scrollTo({ x: width * (index + 1), animated: true });
                } else if (ref.current !== null) {
                  ref.current!.getNode().scrollTo({ x: 0, animated: true });
                }
              }}
              key={title + index}
              title={title}
              last={index === slideItems.length - 1}
              subTitle={subTitle}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomEndRadius: 75,
  },
  footer: {
    flex: 1,
  },
  footerFill: {
    ...StyleSheet.absoluteFillObject,
  },
  footerFillFull: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    borderTopLeftRadius: 75,
  },
});
