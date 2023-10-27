import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { HeaderBackButton } from "@react-navigation/elements"
import { View, Text,Button } from "react-native" 

const ProfilesScreen = () => {
    const navigation = useNavigation()

        return (
            <View>
                <Text>Profiles Screen</Text>
                <Button title="some profile" onPress={()=> navigation.navigate('Profile',{profileId: 1})} />
            </View>
        );
}

    export default ProfilesScreen;