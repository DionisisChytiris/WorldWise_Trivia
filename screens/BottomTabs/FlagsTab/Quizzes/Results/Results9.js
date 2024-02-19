import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'

const Results9 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Results9</Text>
      <Text>----</Text>
      <Text>{route.params.score}</Text>
      <Pressable
        onPress={()=>navigation.navigate('FlagsHome', {score9: route.params.score})}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default Results9