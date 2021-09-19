import React from 'react'
import { Person } from '../../components/Person'
import { FlatList } from 'react-native';

import {
    Container,
    Header,
    ClubTitle,
    BackIcon,
    Button,
    MenuButtons,
    JoinButton,
    TextButton,
    SeeChatButton,
    Wrapper,
    Body
} from './styles'

export function ClubInside() {

    const People = [
        {name: 'John', uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2%C2%AA_CIA_-_A%C3%A7%C3%A3o_De_Comandos.jpg/300px-2%C2%AA_CIA_-_A%C3%A7%C3%A3o_De_Comandos.jpg'}, {}, {}
    ]
    return (
        <Container>
            <Header>
                <Button><BackIcon name="left" /></Button>
                <ClubTitle>React Life</ClubTitle>
            </Header>

            <Wrapper>

                <MenuButtons>
                    <JoinButton>
                        <TextButton>Join Voice Room</TextButton>
                    </JoinButton>

                    <SeeChatButton>
                        <TextButton>Open Chat</TextButton>
                    </SeeChatButton>
                </MenuButtons>

                <Body>
  
                    <FlatList
                        data={People}
                        renderItem={() => {
                            return (
                                <Person/>
                            )
                        }}
                    />

                </Body>

            </Wrapper>

        </Container>
    )
}