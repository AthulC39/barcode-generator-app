import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity,Text,StyleSheet } from "react-native";

const EventItem = ({id,name,description,qrCode}) =>{
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={() =>navigation.navigate("Event", {eventId: id, name, description})}>
            <Text>{name}</Text>
            <Text>{description}</Text>
        </TouchableOpacity>


    );

}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    }

})


export default EventItem;