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
                    rounded
                        source={{
                            uri:"https://lh3.googleusercontent.com/ogw/ADea4I5wPl1mVCalVo6deeJE26NGIfDlSYuSFR68lT7K=s83-c-mo"
                        }}
                        />
                <UserName>Gabriel Camacho</UserName>
            </CardHeader>
            <TextContent>O pai ta on e roteando!!</TextContent>
        </PostContainer>

        <PostContainer style={{marginTop:20}}>
            <CardHeader>
            <Avatar
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