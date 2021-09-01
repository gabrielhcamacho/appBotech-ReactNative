import React from 'react';
import { Avatar } from 'react-native-elements';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    PostContainer,
    UserName,
    CardHeader,
    TextContent,
    PostDate,
    CardBody,
    CardFooter,
    LikeButton,
    ShareButton,
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
            <CardBody>
                <TextContent>O pai ta on e roteando!!</TextContent>
            </CardBody>

            <CardFooter>
                <LikeButton name="like1"/>
                <ShareButton name="repeat"/>
                <PostDate>1 September 2021</PostDate>
            </CardFooter>
        </PostContainer>

        </Container>
    )
}