import { View, Text, Image, ScrollView, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../ThemeMode/ThemeProvider";
import { useSelector } from "react-redux";
import LearnFlagItem from "../LearnFlagItem";

const LearnFlags = () => {
  const { flagItems } = useSelector((state) => state.flags);
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ marginTop: 30 }}></View>
        {/*  Europe  */}
        <View style={styles.container1}>
          <Text style={[styles.continentTitle, { color: colors.text }]}>
            Europe
          </Text>
          <ScrollView>

          <View style={styles.flagContainer1}>
            {/* <FlatList
              data={flagItems}
              renderItem={({item}) => {
                return <LearnFlagItem {...item}/>
              }}
              keyExtractor={item => item.id}
            /> */}

            {flagItems.map((item, index) => {
              return (
                <View key={index}>
                  {/* {item.continent === "Europe" && (
                    <LearnFlagItem  {...item} />
                    )} */}
                    <LearnFlagItem  {...item} />
                </View>
              );
            })}
          </View>
          </ScrollView>
        </View>
        {/*  Asia  */}
        <View style={styles.container2}>
          <Text
            style={[styles.continentTitle, {color: colors.text}]}
          >
            Asia
          </Text>
          <View style={styles.flagContainer2}>
            {flagItems.map((item, index) => {
              return (
                <View key={index}>
                  {item.continent === "Asia" && (
                    <LearnFlagItem {...item} />
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LearnFlags;

const styles = StyleSheet.create({
  container1: {
    flexWrap: "wrap",
    gap: 10,
    width: "90%",
    height: 6800,
    alignContent: "center",
  },
  container2: {
    flexWrap: "wrap",
    gap: 10,
    width: "90%",
    height: 500,
    alignContent: "center",
  },
  continentTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  flagContainer1: {
    backgroundColor: "yellow",
    width: "100%",
    height: 6500,
    flexWrap: "wrap",
    alignContent: "center",
    gap: 10,
  },
  flagContainer2: {
    backgroundColor: "pink",
    width: "100%",
    height: 190,
    flexWrap: "wrap",
    alignContent: "center",
    // gap: 10,
  },
  flagBox: {
    width: "60%",
    backgroundColor: "lightgrey",
    borderRadius: 14,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  textBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // gap: 10,
  },
  img: {
    width: 90,
    height: 60,
    borderRadius: 10,
  },
});

// <View style={styles.flagBox}>
//   <Image
//     style={styles.img}
//     resizeMode="contain"
//     source={item.img}
//   />
//   <View
//     style={{
//       paddingTop: 10,
//       flexDirection: "row",
//       gap: 15,
//     }}
//   >
//     <View style={styles.textBox}>
//       <Text style={{ fontSize: 10 }}>Country:</Text>
//       <Text style={{ fontSize: 14, fontWeight: "bold" }}>
//         {item.country}
//       </Text>
//     </View>
//     <View style={styles.textBox}>
//       <Text style={{ fontSize: 10 }}>Capital:</Text>
//       <Text style={{ fontSize: 14, fontWeight: "bold" }}>
//         {item.capital}
//       </Text>
//     </View>
//   </View>
// </View>
