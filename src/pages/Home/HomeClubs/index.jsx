import React, { useState } from 'react';
import { ScrollView, Modal, FlatList, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { FAB } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ClubCardComponent } from '../../../components/ClubCard'
import { ClubInside } from '../../ClubInside'

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
    VisibilityContainer,
    PickerContainer
} from './styles'


// interface Props {
//     titleClub: string;
// }

// interface SelectOption{
//     isActive: boolean;
//     optionLanguage: String;
// }


export function HomeClubs() {

    const [selectedValue, setSelectedValue] = useState("Python");
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

                   
                        <ModalTitle>Select Category</ModalTitle>

                        <PickerContainer>
                            <Picker
                                selectedValue={selectedValue}
                                itemStyle={{color: "#FFF", fontSize:18, fontWeight: '600', height: 150, width: 200}}
                                style={{ height: 150, width: 200, }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Python" value="Python" />
                                <Picker.Item label="JavaScript" value="js" />
                                <Picker.Item label="C++" value="c++" />
                                <Picker.Item label="IA" value="ia" />
                                <Picker.Item label="React" value="react" />
                            </Picker>
                        </PickerContainer>


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
                                <Category>
                                    <CategoryName>Public</CategoryName>
                                </Category>
                                <Category>
                                    <CategoryName>Private</CategoryName>
                                </Category>
                            </VisibilityContainer>
                        </CategoriesContainer>
                    
                </ModalContainer>
            </Modal>

        </Container>
    )
}
