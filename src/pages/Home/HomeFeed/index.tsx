import React, { useState } from 'react'
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

    const Posts = [
        {}, {}, {}
    ]


    return (

        
        <Container>
            <FlatList
                data={Posts}
                renderItem={() => {
                    return (
                        <PostCard />
                    )
                }}
            />
            
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
                        <SendButton>
                            <Text>Send</Text>
                        </SendButton>

                    </ModalHeader>
                    <ContentInput
                        placeholder="What's going on dev?"
                        multiline={true}
                        placeholderTextColor="#979797"
                    >

                    </ContentInput>
                </ModalContainer>
            </Modal>
        </Container>
    )
}
