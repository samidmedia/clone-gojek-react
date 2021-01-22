import React, {useState, useEffect} from 'react';
import {View,ScrollView} from 'react-native';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import PropsDinamis from './pages/PropsDinamis';


const App = () => {
  const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false)
  //   }, 6000)
  // }, [])
  return (
    <View>
      <ScrollView>
      <SampleComponent />
      <StylingComponent />
      <FlexBox/>
      <Position/>
      <PropsDinamis />
      </ScrollView>
    </View>
  );
};
export default App;