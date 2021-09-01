import React from 'react';
import { ScrollView } from 'react-native'
import { ClubsParticipating } from '../../components/ClubsParticipating';
import { PerfilButtonsMenu } from '../../components/PerfilButtonsMenu';
import { Repositories } from '../../components/Repositories';

import {
    Container,
    Photo,
    Header,
    UserHeaderInfo,
    Name,
    UserName,
    InfoContainer,
    InfoFollowersContainer,
    InfoFollowingContainer,
    InfoFriendsContainer,
    InfoValue,
    InfoName,
    Bio

} from './styles'

export function Profile() {
    return (
        <Container>
            <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}>
                <Header>
                    <Photo source={{ uri:'https://avatars.githubusercontent.com/u/62415661?v=4' }} />
                    <UserHeaderInfo>
                        <Name>Gabriel Camacho</Name>
                        <UserName>@thegabrielcamacho</UserName>
                    </UserHeaderInfo>
                </Header>

                <InfoContainer>
                    <InfoFollowersContainer>
                        <InfoValue>2,7K</InfoValue>
                        <InfoName>Followers</InfoName>
                    </InfoFollowersContainer>


                    <InfoFollowingContainer>
                        <InfoValue>651</InfoValue>
                        <InfoName>Following</InfoName>
                    </InfoFollowingContainer>

                    <InfoFriendsContainer>
                        <InfoValue>46</InfoValue>
                        <InfoName>Friends</InfoName>
                    </InfoFriendsContainer>
                </InfoContainer>

            <PerfilButtonsMenu/>

            <Bio>Software Engineering Student 💻 focusing on front-end,
                ReactJS, NodeJS and React Native
            </Bio>

            <Repositories/>
            
            <ClubsParticipating/>
            </ScrollView>
        </Container>
    )
}