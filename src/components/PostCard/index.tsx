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

interface Props{
    textContent: string;
    date: string;
}

export function PostCard({textContent, date}: Props){
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
                <TextContent>"Estamos on!!!"</TextContent>
            </CardBody>

            <CardFooter>
                <LikeButton name="like1"/>
                <ShareButton name="repeat"/>
                <PostDate>{date}</PostDate>
            </CardFooter>
        </PostContainer>

        <PostContainer>
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
            <CardBody>
                <TextContent>"Ow namoral investe aqui rapidão"</TextContent>
            </CardBody>

            <CardFooter>
                <LikeButton name="like1"/>
                <ShareButton name="repeat"/>
                <PostDate>{date}</PostDate>
            </CardFooter>
        </PostContainer>

        <PostContainer>
            <CardHeader>
            <Avatar
                size="medium"
                rounded
                source={{
                        uri:"https://avatars.githubusercontent.com/u/85971493?v=4"
                        }}
                        />
                <UserName>Giovanna</UserName>
            </CardHeader>
            <CardBody>
                <TextContent>"Alguem manja de C++?"</TextContent>
            </CardBody>

            <CardFooter>
                <LikeButton name="like1"/>
                <ShareButton name="repeat"/>
                <PostDate>{date}</PostDate>
            </CardFooter>
        </PostContainer>
        
        </Container>
    )
}