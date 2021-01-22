import React from 'react';
import {Text, View, Image,StyleSheet} from 'react-native';
import mobil from '../../assets/image/mobil.jpg';

const StylingComponent = () => {
    return (
      <View>
        <Text style={styles.text}>Styling Component</Text>
        <View style={{ width: 100, height:100, backgroundColor: 'cyan', borderWidth: 2,
        borderColor: 'red',
        marginTop: 30,
        marginLeft:20, 
        }} 
        />
        <View style={{ padding: 12, backgroundColor: '#F2F2F2', width:212, borderRadius: 8 }}>
          <Image source={mobil} style={{ width:188, height: 107, borderRadius: 8 }}/>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>BWM master class 2017
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color:'#F2994A', marginTop: 16 }}>Rp. 350.000.000
          </Text>
          <Text style={{ fontSize: 12, fontWeight: '300', marginTop:12 }}>Jakarta Barat
          </Text>
          <View style={{ backgroundColor: '#6fcf97',paddingVertical:6,
        borderRadius:25, marginTop:20 }}>
            <Text style={{ fontSize:14,fontWeight:'600',color:'white',textAlign:'center' }}>
              Beli</Text>
          </View>
        </View>
      </View>
    )
  };

  const styles = StyleSheet.create({
    text:{
      fontSize:18,
      fontWeight: 'bold',
      color: '#10ac84',
      marginTop:40,
    }
  });

  export default StylingComponent;

