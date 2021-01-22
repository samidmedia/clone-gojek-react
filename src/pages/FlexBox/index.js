import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

// class FlexBox extends Component{
//     constructor(props){
//         super(props);
//         console.log('==> constructor');
//         this.state = {
//             subscriber: 300,
//         }
//     }

//     componentDidMount(){
//         console.log('==> component did mount');
//         setTimeout(() => {
//             this.setState({
//                 subscriber: 500,
//             });
//         }, 2000);
//     }

//     componentDidUpdate(){
//         console.log('==> component did update');
//     }

//     componentWillUnmount(){
//         console.log('==> component wil unmoont');
//     }



//     render(){
//         console.log('==> render');
//        return (
//            <View>
//            <View style={{ 
//                flexDirection: 'row', 
//                backgroundColor:'gray', 
//                alignItems: 'center',
//             justifyContent: 'space-between',
           
//            }}>
//                <View style={{ backgroundColor:'#ee5253', width: 50, height: 50 }} />
//                <View style={{ backgroundColor:'#feca57', width: 50, height: 50 }} />
//                <View style={{ backgroundColor:'#1dd1a1', width: 50, height: 50}} />
//                <View style={{ backgroundColor:'#5f27cd', width: 50, height: 50 }} />
//            </View>
//            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//            <Text>Beranda</Text>
//            <Text>Video</Text>
//            <Text>Playlist</Text>
//            <Text>Komunitas</Text>
//            <Text>Channel</Text>
//            <Text>Tentang</Text>
//            </View>
//            <View style={{ flexDirection:'row', alignItems:'center',marginTop:30 }}>
//            <Image 
//            source={{ uri:'https://images.unsplash.com/photo-1611170492187-859eb277162e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
//          }}
//             style={{ width: 100, height: 100, borderRadius: 50, marginRight:14 }}   
//            />
//            <View>
//            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dimas Halim Hartanto</Text>
//            <Text>{this.state.subscriber} ribu subscribe</Text>
//            </View>
//            </View>
//            </View>
//        );
//     }
// }

const FlexBox = () => {
    const [subscriber, setSubscriber] = useState(200);
    
    useEffect(() => {
        console.log('did mount');
        setTimeout(()=> {
            setSubscriber(1000);
        }, 2000);
        return () => {
            console.log('did update');
        }
    }, [subscriber]);


    // useEffect(() => {
    //     console.log('did update');
    //     setTimeout(()=> {
    //         setSubscriber(10000);
    //     }, 2000);
    // }, [subscriber]);

    return (
        <View>
        <View style={{ 
            flexDirection: 'row', 
            backgroundColor:'gray', 
            alignItems: 'center',
         justifyContent: 'space-between',
        
        }}>
            <View style={{ backgroundColor:'#ee5253', width: 50, height: 50 }} />
            <View style={{ backgroundColor:'#feca57', width: 50, height: 50 }} />
            <View style={{ backgroundColor:'#1dd1a1', width: 50, height: 50}} />
            <View style={{ backgroundColor:'#5f27cd', width: 50, height: 50 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
        </View>
        <View style={{ flexDirection:'row', alignItems:'center',marginTop:30 }}>
        <Image 
        source={{ uri:'https://images.unsplash.com/photo-1611170492187-859eb277162e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      }}
         style={{ width: 100, height: 100, borderRadius: 50, marginRight:14 }}   
        />
        <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dimas Halim Hartanto</Text>
        <Text>{subscriber} ribu subscribe</Text>
        </View>
        </View>
        </View>
    )
}

export default FlexBox;