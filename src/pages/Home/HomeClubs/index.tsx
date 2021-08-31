import React, { useState } from 'react';
import { ScrollView, Modal, FlatList } from 'react-native';
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
    CategoryName,
    NameClubInput,
    ClubTitle,
    ClubDetailsContainer,
    VisibilityTitle,
    VisibilityContainer
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
                            <RocketIcon name="rocket-launch" />
                        </CreateButton>

                    </ModalHeader>

                    <ScrollView alwaysBounceVertical={false} 
                                bounces={false}
                                showsVerticalScrollIndicator={false}
                                >
                        <ModalTitle>Select Categories</ModalTitle>

                        <CategoriesContainer>
                            <Category>
                                <CategoryName>Frameworks</CategoryName>
                            </Category>
                            <Category>
                                <CategoryName>Libraries</CategoryName>
                            </Category>
                            <Category>
                                <CategoryName>Programming Languages</CategoryName>
                            </Category>
                            <Category>
                                <CategoryName>Hardware</CategoryName>
                            </Category>
                            <Category>
                                <CategoryName>IA</CategoryName>
                            </Category>
                            <Category>
                                <CategoryName>Logic and Mathematics</CategoryName>
                            </Category>
                            <Category>
                                <CategoryName>Trends and Worldwide</CategoryName>
                            </Category>
                            <Category>
                                <CategoryName>Networking</CategoryName>
                            </Category>
                        </CategoriesContainer>


                        <ClubDetailsContainer>
                            <ClubTitle>The name of your new club</ClubTitle>
                            <NameClubInput
                                placeholder="'Hello World' Club"
                                multiline={true}
                                placeholderTextColor="#979797"
                            >
                            </NameClubInput>
                        </ClubDetailsContainer>

                        <CategoriesContainer>
                            <VisibilityTitle>Select Visibility</VisibilityTitle>
                            <VisibilityContainer>
                                <Category>
                                    <CategoryName>Public</CategoryName>
                                </Category>
                                <Category>
                                    <CategoryName>Private</CategoryName>
                                </Category>
                            </VisibilityContainer>
                        </CategoriesContainer>
                    </ScrollView>
                </ModalContainer>
            </Modal>

        </Container>
    )
}
