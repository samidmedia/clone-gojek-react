import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import mobil from '../../assets/image/mobil.jpg';

const Product = (props) => {
    return (
        <View>
        <View style={styles.wrapper}>
        <Image source={mobil} style={styles.ImageProduct}/>
        <Text style={styles.ProductName}>BWM master class 2017</Text>
        <Text style={styles.ProductPrice}>Rp. 350.000.000</Text>
        <Text style={styles.Location}>Jakarta Barat</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.ButtonWrapper}>
        <Text style={styles.ButtonText}>Beli</Text>
        </View>
        </TouchableOpacity>
        </View>
    </View>
    );
};

export default Product;

const styles = StyleSheet.create({
    wrapper: {
        padding:12,
        backgroundColor: '#F2F2F2',
        width: 212,
        borderRadius: 8,
    },
    ImageProduct: {
        width:188, 
        height: 107,
        borderRadius: 8, 
    },
    ProductName: {
        fontSize: 18, fontWeight: 'bold', marginTop: 16,
    },
    ProductPrice: {
        fontSize: 18, fontWeight: 'bold', color:'#F2994A', marginTop: 16,
    },
    Location: {
        fontSize: 12, fontWeight: '300', marginTop:12,
    },
    ButtonWrapper: {
        backgroundColor: '#6fcf97',paddingVertical:6,
        borderRadius:25, marginTop:20
    },
    ButtonText: {
        fontSize:14,fontWeight:'600',color:'white',textAlign:'center',
    }  
});