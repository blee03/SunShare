import { Image } from 'expo-image';
import { Dimensions, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

type Props = {
    imgSource: ImageSourcePropType;
};

const screenWidth = Dimensions.get('window').width;

export default function PictureCard({ imgSource }: Props) {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.username}>{"@username"}</Text>
                <Text style={styles.metadata}>{"Huntsville, Alabama • 2m"}</Text>
            </View>
            <Image source={imgSource} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
    },
    username: {
        fontSize: 16,
    },
    metadata: {
        fontSize: 14,
    },
    image: {
        width: screenWidth,        // full width of the device
        height: screenWidth * 1.2, // adjust height to maintain aspect ratio
    },
    card: {
        backgroundColor: '#fff',
    },
});
