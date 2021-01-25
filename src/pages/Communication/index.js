import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../Components/Cart';
import Product from '../../Components/Product';


const Communication = () => {
    const [totalProduct, setTotalProduct] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi komunikasi antar komponen</Text>
            <Cart quantity={totalProduct}/>
            <Product onButtonPress ={() => setTotalProduct(totalProduct + 1)} />
        </View>

        
    );
};

export default Communication;

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
});