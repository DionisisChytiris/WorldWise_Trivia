import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const navigation = useNavigation()
  const [name, setName] = useState("")

  useEffect(() => {
    getData();
  }, []);

  const getData= ()=>{
    try{
      AsyncStorage.getItem("UserName").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
        }
      })
    }catch(e){
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      {name ? 
        <View style={{marginBottom: 40}}>
          <Text style={{color: 'white'}}>Welcome to Quizzify {name}</Text>
        </View>
        : 
        null
      }
      <Pressable 
        // onPress={()=> navigation.navigate('MultiLanguage')}
        onPress={()=> 
          {name ? 
            navigation.navigate("Draw")
            : 
            navigation.navigate("MultiLanguage")
          }
        
        }
        style={styles.circle}  
      >
        {name ? 
        <Text>Enter</Text>
        : 
        <Text style={styles.title}>Quizzify</Text>
      }
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle:{
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue'
  }
})