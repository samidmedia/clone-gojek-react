import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native'

const Item= ({name, email, xray, onPress}) => {
    return (
        <View style={styles.itemContainer}>
        <Image source={{ uri: `https://api.adorable.io/avatars/150/${email}.png` }} style={styles.avatar}/>
            <View style={styles.desc}>
                <TouchableOpacity onPress={onPress}>
                <Text style={styles.descName}>{name}</Text>
                </TouchableOpacity>
                <Text style={styles.descEmail}>{email}</Text>
                <Text style={styles.descXray}>{xray}</Text>
            </View>
            <Text style={styles.delete}>X</Text>
        </View>
    );
}


 
const LocalAPI = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [xray, setXray] = useState("");
    const [users, setUsers] = useState([]);
    const [button, setButton] = useState("Simpan");
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        getData();

    },[]);

    const submit = () => {
        const data = {
            name,
            email,
            xray,
        } 
        if (button === 'Simpan') {
            axios.post(' http://10.0.2.2:3004/users', data)
            .then(res => {
                console.log('res:', res);
                setName("");
                setEmail("");
                setXray("");
                getData();
            })
        } else if(button === 'Update'){
            axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
            .then(res => {
                console.log('res update', res);
                setName("");
                setEmail("");
                setXray("");
                getData();
                setButton("Simpan");
            });
        }
    }

    // get data user
    const getData = () => {
        axios.get('http://10.0.2.2:3004/users')
        .then(res => {
            console.log('res get data: ', res)
            setUsers(res.data);
        })
    }


    const selectItem = (item) => {
        console.log('selected item: ', item);
        setSelectedUser(item);
        setName(item.name);
        setEmail(item.email);
        setXray(item.xray);
        setButton("update");
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Local API (JSON SERVER)</Text>
            <Text>Input Nama Pasien Rumah Sakit</Text>
            <TextInput placeholder="Nama Lengkap" style={styles.input} value={name} onChangeText= {(value) => setName(value)}></TextInput>
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText= {(value) => setEmail(value)}></TextInput>
            <TextInput placeholder="Xray Type Code" style={styles.input} value={xray} onChangeText= {(value) => setXray(value)}></TextInput>
            <Button title={button} onPress={submit} />
            <View style={styles.line} />
            {users.map(user => {
                return <Item key={user.id} name={user.name} emai={user.emai} xray={user.xray} onPress={() => selectItem(user)}  />
            })}
        </View>
    )
}

export default LocalAPI

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    input:{borderWidth: 1, marginBottom: 12, borderRadius: 25, paddingHorizontal: 25},
    avatar: {width:100, height: 100, borderRadius: 100},
    itemContainer: {flexDirection: 'row', marginBottom: 20},
    desc: {marginLeft: 18, flex: 1},
    descName: {fontSize: 20, fontWeight: 'bold'},
    descEmail: {fontSize: 16},
    descXray:{fontSize: 16, marginTop: 8},
    delete: {fontSize: 10, fontWeight: 'bold', color:'red'}
})
