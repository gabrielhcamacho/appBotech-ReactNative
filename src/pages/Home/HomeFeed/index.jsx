import React, { useState, useEffect } from 'react'
import { FAB } from 'react-native-elements';
import { FlatList, Modal, StyleSheet } from 'react-native'

import {
    Container,
    FABWrapper,
    ModalContainer,
    ModalHeader,
    CancelButton,
    SendButton,
    ContentInput,
    Text,
} from './styles'

import { PostCard } from '../../../components/PostCard'


export function HomeFeed() {

    const [modalVisible, setModalVisible] = useState(false);


    const [newPost, setNewPost] = useState('');
    const [myPosts, setMyPosts] = useState([]);
    const[date, setDate] = useState('')

    function handleAddNewPost(){
        setMyPosts(oldState => [...oldState, newPost])
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        const newDate = new Date();
        const currentDay = newDate.getDate()
        const currentMonth = newDate.toLocaleString('eg-IT', { month: 'long' })
        const currentHour = newDate.getHours()+":"+newDate.getMinutes()+ 
        " - "+currentDay+ " of "+ currentMonth;
        setDate(currentHour)
    }, [myPosts])

    const Posts = [
        {}, {}
    ]


    return (

       
        <Container>
             {/* { myPosts.map(post =>( */}
            <FlatList
                data={Posts}
                renderItem={() => {
                    return (
                        <PostCard date={date}/>
                    )
                }}
              
            /> 
            {/* <FlatList
                data={Posts}
                renderItem={() => {
                    return (
                        <PostCard />
                    )
                }}
            /> */}
            
            <FABWrapper>
                
                    <FAB
                        title="New Post"
                        color="#5636d3"
                        size="large"
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                
            </FABWrapper>

            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                presentationStyle="fullScreen"

            >
                <ModalContainer>
                    <ModalHeader>

                        <CancelButton onPress={() => setModalVisible(!modalVisible)}>
                            <Text>Cancel</Text>
                        </CancelButton>
                        <SendButton onPress={handleAddNewPost}
                        >
                            <Text>Send</Text>
                        </SendButton>

                    </ModalHeader>
                    <ContentInput
                        placeholder="What's going on dev?"
                        multiline={true}
                        placeholderTextColor="#979797"
                        onChangeText={setNewPost}
                    >

                    </ContentInput>
                </ModalContainer>
            </Modal>
        </Container>
    )
}
