import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import FlipCard from "react-native-flip-card";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const LearnCapitalItem = ({ img, country, capital, population, symbol, currency, language }) => {
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
              <Text style={{fontSize: 12, fontWeight: "bold" , color: colors.text}}>
                {country}
              </Text>
            </View>
            <View style={styles.textBox}>
              {/* <Text style={{ fontSize: 10 }}>Capital:</Text> */}
              <Text
                style={{ fontSize: 10, fontWeight: "bold", color: colors.text}}
              >
                {capital}
              </Text>
            </View>
          </View>
        </View>

        {/* Back Side */}
        <View
          style={[styles.flagBoxBack, { backgroundColor: colors.bgLngFlgs }]}
        >
          <View style={{alignItems: 'center'}}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <MaterialIcons name="people" size={14} color="black" />
              <Text style={{ fontSize: 10, color: colors.textDrawer }}>Population: </Text>
            </View>
            <Text style={{ fontSize: 11, fontWeight: "500", textAlign: 'center', color: colors.text }}>{population} </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Fontisto name="money-symbol" size={12} color="black" />
              <Text style={{ fontSize: 10,color: colors.textDrawer }}>Currency: </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 15}}>
              <Text style={{ fontSize: 11, fontWeight: "500", color: colors.text}}>{symbol}</Text>         
              <Text style={{ fontSize: 11, fontWeight: "500", color: colors.text}}>{currency}</Text>         
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <MaterialIcons name="language" size={12} color="black" />
              <Text style={{ fontSize: 10,color: colors.textDrawer }}>Language: </Text>
            </View>
            <Text style={{ fontSize: 11, fontWeight: "500", textAlign: 'center',color: colors.text }}>{language}</Text>
          </View>
        </View>
      </FlipCard>
    </Pressable>
  );
};

export default LearnCapitalItem;

const styles = StyleSheet.create({
  flagBox: {
    flexDirection: "column",
    // width: '95%',
    width: 160,
    height: 150,
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
  flagBoxBack: {
    flexDirection: "column",
    // width: '95%',
    width: 160,
    height: 150,
    backgroundColor: "#F5FAFA",
    borderRadius: 14,
    marginBottom: 30,
    // paddingTop: 10,
    // paddingLeft: 30,
    gap: 8,
    elevation: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  img: {
    width: 95,
    height: 65,
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
