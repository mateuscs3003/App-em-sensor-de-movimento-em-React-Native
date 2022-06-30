import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import imagex from './assets/icons/eco-light.png';
import imagey from './assets/icons/eco-light-off.png';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    return () => subscription.remove();
  }, []);

  return <View style={toggle ? style.containerLight : style.container} >
    <TouchableOpacity onPress = {handleChangeToggle}>
      <Image source={toggle ? imagex : imagey} style={toggle ? style.lightningOn : style.lightningOff} />
    </TouchableOpacity>
  </View>
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightningOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightningOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  }

});