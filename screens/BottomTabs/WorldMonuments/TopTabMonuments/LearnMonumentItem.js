import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LearnMonumentItem = ({ img, name, country, city, date }) => {
  const { colors } = useTheme();

  return (
    <View style={{ alignItems: "center", paddingBottom: 30}}>
      <View style={styles.container}>
        <View>
          <Image style={styles.img} resizeMode="cover" source={img} />
        </View>
          <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: 'center', color: colors.text, paddingVertical: 10 }}>
            {name}
          </Text>
        <View style={{flexDirection: 'row', gap: 50, paddingBottom: 10}}>
          <Text style={{ fontSize: 12, fontWeight: "400", color: colors.text }}>
            {city}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: colors.text }}>
            {country}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: colors.text }}>
            {date}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LearnMonumentItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: '100%',
    // height: 130,
    backgroundColor: "blue",
    borderRadius: 14,
    marginBottom: 40,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: width/1.3,
    height: height/4,
    borderRadius: 10,
  },
});
