import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
    return (
      <View>
      <View style={{ width:80, height:80, backgroundColor: 'red' }}/>
      <Text>Dimas</Text>
      <Halim />
      <Text>Hartanto</Text>
      <Photo />
      <TextInput  style={{ borderWidth: 2 }}/>
      <BoxGreen/>
      <Profile />
    </View>
    );
  };
  
  
  
  const Halim = () => {
    return <Text>Halim</Text>;
  };
  
  const Photo = () => {
    return <Image source={{ uri: 'https://images.unsplash.com/photo-1611170492187-859eb277162e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' }} style={{ width:100, height:100 }}/>
  };
  
  class BoxGreen extends Component {
    render(){
      return <Text>Ini Component dari class</Text>
    }
  }
  
  class Profile extends Component{
    render(){
      return (
        <View>
        <Image source = {{ uri: 'https://images.unsplash.com/photo-1611248543984-bbdba6fbed23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' }} style={{ width:100, height:100, borderRadius: 50 }} />
        <Text style={{ color:'blue', fontSize:24 }}>Ini adalah atlit MMA</Text>
  
        </View>
        
      );
    }
  }

  export default SampleComponent;