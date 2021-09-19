import React, { useState } from 'react';
import { ScrollView, Modal, FlatList, StyleSheet, TouchableOpacityProps } from 'react-native';
import { FAB } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ClubCardComponent } from '../../../components/ClubCard'
import {ClubInside} from '../../ClubInside'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



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

interface PropsCategoryButton extends TouchableOpacityProps{
    isActive: boolean;
}


export function HomeClubs({isActive}: PropsCategoryButton) {

    
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
                    techCategory="Framework"
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
                            <Category isActive={isActive}>
                                <CategoryName>Frameworks</CategoryName>
                            </Category>
                            <Category isActive={isActive}>
                                <CategoryName>Libraries</CategoryName>
                            </Category>
                            <Category isActive={isActive}>
                                <CategoryName>Programming Languages</CategoryName>
                            </Category>
                            <Category isActive={isActive}>
                                <CategoryName>Hardware</CategoryName>
                            </Category>
                            <Category isActive={isActive}>
                                <CategoryName>IA</CategoryName>
                            </Category>
                            <Category isActive={isActive}>
                                <CategoryName>Logic and Mathematics</CategoryName>
                            </Category>
                            <Category isActive={isActive}>
                                <CategoryName>Trends and Worldwide</CategoryName>
                            </Category>
                            <Category isActive={isActive}>
                                <CategoryName>Networking</CategoryName>
                            </Category>
                        </CategoriesContainer>


                        <ClubDetailsContainer>

                            <ClubTitle>The name of your new club</ClubTitle>
                            <NameClubInput
                                placeholder="It's not bug, it's a feature"
                                multiline={true}
                                placeholderTextColor="#979797"
                            >
                            </NameClubInput>
                        </ClubDetailsContainer>

                        <CategoriesContainer>
                            <VisibilityTitle>Select Visibility</VisibilityTitle>
                            <VisibilityContainer>
                                <Category isActive={isActive}>
                                    <CategoryName>Public</CategoryName>
                                </Category>
                                <Category isActive={isActive}>
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
