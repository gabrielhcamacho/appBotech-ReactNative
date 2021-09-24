import React, { useState } from 'react';
import { ScrollView, Modal, FlatList, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { FAB } from 'react-native-elements';


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
    VisibilityContainer,
    PickerContainer,
    RestModalContainer,
    ContainerTest
} from './styles'


// interface Props {
//     titleClub: string;
// }

// interface SelectOption{
//     isActive: boolean;
//     optionLanguage: String;
// }



export function HomeClubs({navigation}) {

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
                    onPress={() => navigation.navigate("ClubInside")}
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

                    <ContainerTest>
                    <PickerContainer>
                        <Picker
                            selectedValue={selectedValue}
                            itemStyle={{ color: "#FFF", fontSize: 18, fontWeight: '600', height: 150, width: 200 }}
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

                    <RestModalContainer>
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
                        
                        
                    </RestModalContainer>
                    </ContainerTest>

                </ModalContainer>
            </Modal>

        </Container>
    )
}
