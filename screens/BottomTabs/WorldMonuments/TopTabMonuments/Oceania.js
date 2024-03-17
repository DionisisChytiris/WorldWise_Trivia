import { View, Text } from "react-native";
import React, {useCallback} from "react";
import { styles } from "./styles";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
import LearnMonumentItem from "./LearnMonumentItem";
import OceaniaMonEn from '../../../../data/worldMonuments/TopTabMonuments/OceaniaMonEn'
import {FlashList} from '@shopify/flash-list'
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get("window").height;

const Oceania = () => {
  const { colors } = useTheme();
  const {t} = useTranslation()
  
  const renderItem = useCallback(({ item }) => {
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <LearnMonumentItem {...item} />
      </View>
    );
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
       <Text style={[styles.continentTitle, { color: colors.text }]}>
          {t("oceania")}
        </Text>
        <View
        style={{
          width: width / 1.1,
          height: 500,
          backgroundColor: "gray",
          paddingBottom: 30,
        }}
      >
        <FlashList
          data={OceaniaMonEn}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          estimatedItemSize={200}
        />
      </View>
    </View>
  );
};

export default Oceania;
