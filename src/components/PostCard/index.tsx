import React from 'react';
import { Avatar } from 'react-native-elements';

import {
    Container,
    PostContainer,
    UserName,
    CardHeader,
    TextContent
} from './styles';



export function PostCard(){
    // let date = new Date();
    return(
        <Container>
        <PostContainer>
            <CardHeader>
            <Avatar
                size="medium"
                rounded
                source={{
                        uri:"https://avatars.githubusercontent.com/u/62415661?v=4"
                        }}
                        />
                <UserName>Gabriel Camacho</UserName>
            </CardHeader>
            <TextContent>O pai ta on e roteando!!</TextContent>
        </PostContainer>

        <PostContainer style={{marginTop:20}}>
            <CardHeader>
            <Avatar
                size="medium"
                rounded
                source={{
                        uri:"https://avatars.githubusercontent.com/u/80973488?v=4"
                        }}
                        />
                <UserName>Ariel</UserName>
            </CardHeader>
            <TextContent>Vou dar um basta na tirania da Tania!!!!</TextContent>
        </PostContainer>
        </Container>
    )
}