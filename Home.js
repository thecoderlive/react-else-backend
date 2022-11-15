import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import StoryList from './StoryList'
import Stories from './Stories'

const Home = () => (
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<StoryList item={item.story_list}/>
<Stories item={item.stories}/>
</ScrollView>
)

export default Home;

const styles = StyleSheet.create({

});