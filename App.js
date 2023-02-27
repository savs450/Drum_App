import React from 'react';
import {Pressable,TouchableOpacity ,ScrollView, Text, View,Image, StyleSheet,} from 'react-native';
import Sound from 'react-native-sound';

const App = () => {
 const playSound = (sound) =>{
  const soundVar = new Sound (sound  ,Sound.MAIN_BUNDLE, (error)=>{
    if(error){
      console.warn('failed to load sound',error)
      return;
    }
    console.log('duration in sec:'+soundVar.getDuration())
  })
  setTimeout(()=>{
    soundVar.play()
  },500);
  soundVar.release();
 }

  const soundList = [
    require("./assets/one.mp3"),
    require("./assets/two.mp3"),
    require("./assets/three.mp3"),
    require("./assets/four.mp3",),
    require("./assets/fv.mp3",),
    require("./assets/sixth.mp3",),
    require("./assets/seventh.mp3",),
    require("./assets/eighth.mp3",),
   
  ]
  return (
    <ScrollView style ={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <View style={styles.gridContainer} >
        {soundList.map((sound)=>(
          <TouchableOpacity key={sound} style={styles.box} onPress={()=>playSound(sound)} >
            <Text style={styles.text} >{sound}</Text>
          </TouchableOpacity >
        ))}
      </View>
    </ScrollView>
  );
};

export default App;
const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor:'grey',
  },
  logo:{
    alignSelf:"center",
    marginTop:10
  },
  gridContainer:{
    flex:1,
    margin:5,
    AlignItem:'flex-start',
    flexDirection:"row",
    flexWrap: 'wrap',
    justifyContent:'space-around'
  },
  box:{
    height:110,
    alignItems: "center",
    justifyContent:'center',
    width:'46%',
    marginVertical:6,
    backgroundColor:"#0f4c72"

  },
  text:{
    fontSize:50,
    color:"blue"
  }
})