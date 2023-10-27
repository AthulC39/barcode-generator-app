import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import EventList from '../components/events/event-list';

const homeScreen = () => {
    const navigation = useNavigation()
    return(
        <View style={style.screen}>
            <EventList />
        </View>

    );

}

const style = StyleSheet.create ({
    screen: {
        padding: 20,

    }

})

export default homeScreen;