import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FastImageView,
} from "react-native";
import React, {useState} from "react";
import { useTheme } from "../../../ThemeMode/ThemeProvider";
import FlipCard from "react-native-flip-card";

const LearnFlagItem = ({ img, country, capital }) => {
  const { colors } = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Pressable onPress={toggleFlip}>
      <FlipCard
        // style={[styles.shadow]}
        friction={8}
        perspective={1000}
        flipHorizontal={false}
        flipVertical={true}
        flip={isFlipped}
        clickable={false}
      >
        <View style={[styles.flagBox, { backgroundColor: colors.bgLngFlgs }]}>
          <View
            style={{
              elevation: 15,
              shadowOffset: { width: 3, height: 3 },
              shadowOpacity: 1.0,
              borderRadius: 10,
            }}
          >
            <Image style={styles.img} resizeMode="cover" source={img} />
          </View>
          <View style={{ paddingTop: 2, flexDirection: "column" }}>
            <View style={styles.textBox}>
              {/* <Text style={{ fontSize: 10 }}>Country:</Text> */}
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                {country}
              </Text>
            </View>
            <View style={styles.textBox}>
              {/* <Text style={{ fontSize: 10 }}>Capital:</Text> */}
              <Text
                style={{ fontSize: 12, fontWeight: "bold", color: "darkblue" }}
              >
                {capital}
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.flagBox, { backgroundColor: colors.bgLngFlgs }]}>
          <Text style={{position: 'absolute', top: 10, left: 20}}>{country}</Text>
          <View style={{width: '75%', height: 2, backgroundColor: 'black',position: 'absolute', top: 35, left: 20}}/>
        </View>
      </FlipCard>
    </Pressable>
  );
};

export default LearnFlagItem;

const styles = StyleSheet.create({
  flagBox: {
    flexDirection: "column",
    // width: '95%',
    width: 160,
    height: 130,
    backgroundColor: "#F5FAFA",
    borderRadius: 14,
    marginBottom: 30,
    paddingTop: 10,
    justifyContent: "center",
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    alignItems: "center",
    gap: 10,
    elevation: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7,
    borderRadius: 15,
  },
  textBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  img: {
    width: 85,
    height: 55,
    borderRadius: 10,
  },
});

/* <FastImageView>
      <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
    </FastImageView> */
