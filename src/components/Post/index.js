import React, {useState} from 'react'
import { 
    View,
    Text,
    TouchableWithoutFeedback,
    Image
} from 'react-native'

import Video from 'react-native-video'
import styles from './styles'

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Post = () => {
    const [paused, setPaused] = useState(false)

    const onPlayPausePress = () => {
        setPaused(!paused)
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback 
            onPress={onPlayPausePress} 
            >
                <Video
                    source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                    style={styles.video}
                    onError={(e) => console.log(e)}
                    resizeMode={'cover'}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>

            <View style={styles.uiContainer}>
                <View style={styles.rightContainer}>
                    <View style={styles.profilePictureContainer}>
                        <Image style={styles.profilePicture} source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png' }} />

                    </View>
                    <View style={styles.iconContainer}>
                        <AntDesign name={"heart"} size={40} color="white" />
                        <Text style={styles.statsLabel}>123</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <FontAwesome name={"commenting"} size={40} color="white" />
                        <Text style={styles.statsLabel}>123</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <Fontisto name={"share-a"} size={35} color="white" />
                        <Text style={styles.statsLabel}>123</Text>
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <View>
                        <Text style={styles.handle}>@Rabbit</Text>
                        <Text style={styles.description}>hahahaha hello</Text>

                        <View style={styles.songRow}>
                            <Entypo name={"beamed-note"} size={24} color="white" />
                            <Text style={styles.songName}>Nf - The search</Text>
                        </View>
                    </View>
                    <Image
                        style={styles.songImage}
                        source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png' }}
                    />
                </View>
            </View>
        </View>
    )
}

export default Post