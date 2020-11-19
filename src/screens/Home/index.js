import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import Post from '../../components/Post'

import posts from '../../../data/posts'

const Home = () => {
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({post}) => <Post post={post}/>}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
        </View>
    )
}

export default Home