import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";

const LearnFlagItem = ({ img, country, capital }) => {
  const { colors } = useTheme();

  return (
    <>
      {/* <View style={[styles.flagBox, { backgroundColor: colors.bgLngFlgs }]}> */}
      <View style={styles.flagBox}>
        <View>
          <View>
            <Image style={styles.img} resizeMode="cover" source={img} />
          </View>
          <View style={{ flexDirection: "column", marginTop: 8, alignItems: 'center' }}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: colors.text }}
            >
              {country}
            </Text>
            <Text
              style={{ fontSize: 11, fontWeight: "bold", color: colors.text }}
            >
              {capital}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default LearnFlagItem;

const styles = StyleSheet.create({
  flagBox: {
    flexDirection: "column",
    width: 150,
    height: 130,
    backgroundColor: 'transparent',
    borderRadius: 14,
    marginBottom: 40,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
});
