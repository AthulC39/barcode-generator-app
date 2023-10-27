import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import EventList from '../components/events/event-list';
import { useEffect, useState } from 'react';

const homeScreen = () => {
    const [data, setData] = useState([])

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async() => {
        const response = await fetch('http://127.0.0.1:8000/api/events/')
        const data = await response.json()
        setData(data)
    }

    const navigation = useNavigation()
    return(
        <View style={style.screen}>
            <EventList data={data}/>
        </View>

    );

}

const style = StyleSheet.create ({
    screen: {
        padding: 20,

    }

})

export default homeScreen;