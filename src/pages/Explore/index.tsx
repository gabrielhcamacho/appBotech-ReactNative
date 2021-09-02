import React from 'react';
import { ScrollView } from 'react-native';

import {
    Container,
    Header,
    PageTitle,
    SearchBarContainer,
    Icon,
    TextInput,
    Body,
    Title,
    Row,
    TechContainer,
    TechHeader,
    TechTitle,
    TechDescription,
} from './styles'

export function Explore(){
    return(
        <Container>

            <Header>
                <PageTitle>Explore</PageTitle>
                <SearchBarContainer>
                    <Icon/>
                    <TextInput 
                        placeholder="search" 
                        placeholderTextColor='#FFF'></TextInput>
                </SearchBarContainer>
            </Header>


            <Body>
                <ScrollView>
                    <Title>FIND CLUBS AND CONTENT ABOUT...</Title>

                    <Row>
                        <TechContainer>
                            <TechHeader>
                                <Icon/>
                                <TechTitle></TechTitle>
                            </TechHeader>
                            <TechDescription></TechDescription>
                        </TechContainer>

                        <TechContainer>
                            <TechHeader>
                                <Icon/>
                                <TechTitle></TechTitle>
                            </TechHeader>
                            <TechDescription></TechDescription>
                        </TechContainer>
                    </Row>

                    <Row>
                        <TechContainer>
                            <TechHeader>
                                <Icon/>
                                <TechTitle></TechTitle>
                            </TechHeader>
                            <TechDescription></TechDescription>
                        </TechContainer>

                        <TechContainer>
                            <TechHeader>
                                <Icon/>
                                <TechTitle></TechTitle>
                            </TechHeader>
                            <TechDescription></TechDescription>
                        </TechContainer>
                    </Row>

                    <Row>
                        <TechContainer>
                            <TechHeader>
                                <Icon/>
                                <TechTitle></TechTitle>
                            </TechHeader>
                            <TechDescription></TechDescription>
                        </TechContainer>

                        <TechContainer>
                            <TechHeader>
                                <Icon/>
                                <TechTitle></TechTitle>
                            </TechHeader>
                            <TechDescription></TechDescription>
                        </TechContainer>
                    </Row>

                    <Row>
                        <TechContainer>
                            <TechHeader>
                                <Icon/>
                                <TechTitle></TechTitle>
                            </TechHeader>
                            <TechDescription></TechDescription>
                        </TechContainer>

                        <TechContainer>
                            <TechHeader>
                                <Icon/>
                                <TechTitle></TechTitle>
                            </TechHeader>
                            <TechDescription></TechDescription>
                        </TechContainer>
                    </Row>

                    <Row>
                        <TechContainer>
                            <TechHeader>
                                <Icon/>
                                <TechTitle></TechTitle>
                            </TechHeader>
                            <TechDescription></TechDescription>
                        </TechContainer>

                        <TechContainer>
                            <TechHeader>
                                <Icon/>
                                <TechTitle></TechTitle>
                            </TechHeader>
                            <TechDescription></TechDescription>
                        </TechContainer>
                    </Row>
                    
                    <Row>
                        <TechContainer>
                            <TechHeader>
                                <Icon/>
                                <TechTitle></TechTitle>
                            </TechHeader>
                            <TechDescription></TechDescription>
                        </TechContainer>

                        <TechContainer>
                            <TechHeader>
                                <Icon/>
                                <TechTitle></TechTitle>
                            </TechHeader>
                            <TechDescription></TechDescription>
                        </TechContainer>
                    </Row>

                </ScrollView>
            </Body>
        </Container>
    )
}