import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'

const Results2 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Results2</Text>
      <Text>----</Text>
      <Text>{route.params.score}</Text>
      <Pressable
        onPress={()=>navigation.navigate('FlagsHome', {score2: route.params.score})}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default Results2