import React from 'react';
import { ScrollView } from 'react-native';


import {
    Container,
    Header,
    PageTitle,
    SearchBarContainer,
    Icon,
    IconJS,
    IconUnreal,
    IconMath,
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
                                <Icon name="python"/>
                                <TechTitle>Python</TechTitle>
                            </TechHeader>
                            <TechDescription>Python is used in virtually every industry and scientific field that you can imagine</TechDescription>
                        </TechContainer>

                        <TechContainer>
                            <TechHeader>
                                <Icon name="raspberry-pi"/>
                                <TechTitle>Raspberry Pi</TechTitle>
                            </TechHeader>
                            <TechDescription>The Raspberry Pi 4 is the ideal “brain” for a multitude of DIY projects</TechDescription>
                        </TechContainer>
                    </Row>

                    <Row>
                        <TechContainer>
                            <TechHeader>
                                <Icon name="java"/>
                                <TechTitle>Java</TechTitle>
                            </TechHeader>
                            <TechDescription>Java is used for back-end projects, including big data and Android development</TechDescription>
                        </TechContainer>

                        <TechContainer>
                            <TechHeader>
                                <IconJS name="logo-javascript"/>
                                <TechTitle>JavaScript</TechTitle>
                            </TechHeader>
                            <TechDescription>JS it’s used for Web, Mobile Applications, Desktop Applications and Web Games</TechDescription>
                        </TechContainer>
                    </Row>

                    <Row>
                        <TechContainer>
                            <TechHeader>
                                <Icon name="php"/>
                                <TechTitle>PHP</TechTitle>
                            </TechHeader>
                            <TechDescription>PHP is a server side scripting language. It's used to manage dynamic content</TechDescription>
                        </TechContainer>

                        <TechContainer>
                            <TechHeader>
                                <Icon name="swift"/>
                                <TechTitle>Swift</TechTitle>
                            </TechHeader>
                            <TechDescription>Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond</TechDescription>
                        </TechContainer>
                    </Row>

                    <Row>
                        <TechContainer>
                            <TechHeader>
                                <Icon name="react"/>
                                <TechTitle>React</TechTitle>
                            </TechHeader>
                            <TechDescription>React is a JavaScript library for building user interfaces or UI components</TechDescription>
                        </TechContainer>

                        <TechContainer>
                            <TechHeader>
                                <Icon name="angular"/>
                                <TechTitle>Angular</TechTitle>
                            </TechHeader>
                            <TechDescription>Angular is framework for building single-page client applications using HTML and TypeScript</TechDescription>
                        </TechContainer>
                    </Row>

                    <Row>
                        <TechContainer>
                            <TechHeader>
                                <Icon name="vuejs"/>
                                <TechTitle>VueJS</TechTitle>
                            </TechHeader>
                            <TechDescription>VueJS is an open source progressive JavaScript framework used to develop interactive web interfaces</TechDescription>
                        </TechContainer>

                        <TechContainer>
                            <TechHeader>
                                <Icon name="unity"/>
                                <TechTitle>Unity</TechTitle>
                            </TechHeader>
                            <TechDescription>Unity3D is a powerful cross-platform 3D engine and a user friendly development environment</TechDescription>
                        </TechContainer>
                    </Row>

                    <Row>
                        <TechContainer>
                            <TechHeader>
                                <IconUnreal name="unreal-engine"/>
                                <TechTitle>Unreal Engine</TechTitle>
                            </TechHeader>
                            <TechDescription>Is a complete suite of development tools for working with real-time technology</TechDescription>
                        </TechContainer>

                        <TechContainer>
                            <TechHeader>
                                <IconMath name="math-compass"/>
                                <TechTitle>Math</TechTitle>
                            </TechHeader>
                            <TechDescription>Algebra, arithmetic, calculus, geometry, and so on</TechDescription>
                        </TechContainer>
                    </Row>

                </ScrollView>
            </Body>
        </Container>
    )
}