import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyAu8e5nlV9L83NQBJPrUqZ-RSn5udlffxs",
  authDomain: "meu-primeiro-1d7c9.firebaseapp.com",
  projectId: "meu-primeiro-1d7c9",
  storageBucket: "meu-primeiro-1d7c9.firebasestorage.app",
  messagingSenderId: "683067560860",
  appId: "1:683067560860:web:8e34b6f5e27ff29d396e59"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const nomesCollection = firebase.firestore().collection('Nomes');
            const snapshot = await nomesCollection.get();

            const data = [];
            snapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });

            setNomes(data);
        };
        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Lista de Nomes</Text>
            </View>
            <FlatList
                data={nomes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.Nome} {item.Sobrenome}</Text>
                    </View>
                )}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    header: {
        backgroundColor: '#3568f7',
        padding: 20,
        borderRadius: 8,
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    listContent: {
        paddingBottom: 20,
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    itemText: {
        fontSize: 18,
        color: '#333',
    },
});
