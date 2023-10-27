import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import { HeaderBackButton } from "@react-navigation/elements"

const EventDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const { eventId, title, description } = route.params

    useLayoutEffect(() => {
        navigation.setOptions ({
            headerTitle: "new title",
            headerLeft: () => (
                <HeaderBackButton
                    tintColor='white'
                    label='Previous'
                    onPress={()=> navigation.goBack()}
                />
            )
        })
    }, [])

    return(
        <View style={style.screen}>
            <Text style={{fontSize:20}}>This is event detail screen for {eventId}</Text>
            <Text style={{fontSize:20}}>{title}</Text>
            <Text style={{fontSize:20}}>{description}</Text>
        </View>

    );

}

const style = StyleSheet.create ({
    screen: {
        padding: 20,

    }

})

export default EventDetailScreen;