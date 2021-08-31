import React, { useState } from 'react';
import { ScrollView, Modal } from 'react-native';
import { FAB } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ClubCardComponent } from '../../../components/ClubCard'


import {
    Container,
    FABWrapper,
    ModalContainer,
    ModalHeader,
    CancelButton,
    CreateButton,
    Text,
    RocketIcon,
    ModalTitle,
    CategoriesContainer,
    Category,
    CategoryName
} from './styles'

interface Props {
    titleClub: string;
}

export function HomeClubs() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container>

            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <ClubCardComponent
                    titleClub="React Life"
                    techCategory="React"
                />
                <ClubCardComponent
                    titleClub="Freaking AI"
                    techCategory="Artificial Intelligence"
                />
                <ClubCardComponent
                    titleClub="Freaking AI"
                    techCategory="Artificial Intelligence"
                />
                <ClubCardComponent
                    titleClub="Freaking AI"
                    techCategory="Artificial Intelligence"
                />
            </ScrollView>


            <FABWrapper>
                <FAB title="New Club"
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
                        <CreateButton>
                            <Text>Launch</Text>
                            <RocketIcon name="rocket-launch"/>
                        </CreateButton>

                    </ModalHeader>

                    <ModalTitle>Select Categories</ModalTitle>

                    <CategoriesContainer>
                        <Category>
                            <CategoryName>React</CategoryName>
                        </Category>
                        <Category>
                            <CategoryName>Angular</CategoryName>
                        </Category>
                        
                    </CategoriesContainer>

                </ModalContainer>
            </Modal>

        </Container>
    )
}
