import React from 'react';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import {
    PaddingContainer,
    Header,
    Title,
    ButtonMoreClubs,
    Icon,
    ClubOne,
    ClubICon,
    ClubName,
    ClubsWrapper,
} from './styles'



export function Club() {

    const ClubData = [
        {
            name: 'React Life',
            id: '1',
            uri: 'https://hermes.digitalinnovation.one/articles/cover/f60b2c55-e681-42cb-95bc-e9b084da3867.png'
        },
        {
            name: 'Freaking IA',
            id: '2',
            uri: 'https://solvimm.com/wp-content/uploads/2019/01/DestacadaBlog_16.png'
        },
        {
            name: 'Unifolas TI',
            id: '3',
            uri: 'https://s3-sa-east-1.amazonaws.com/figuras.tecconcursos.com.br/01397272-d3df-470e-b8d5-46a1c5819957'
        },
        {
            name: 'JS Brasil',
            id: '4',
            uri: 'https://cdn.iconscout.com/icon/free/png-512/node-js-1-1174935.png'
        },
        {
            name: 'Devs Worldwide',
            id: '5',
            uri: 'http://www.exportplanning.com/media/uploads/img/2021/03/31/world-alwayson-globe-connected-ss-1920_ga3mfi_Bd7PdYB.jpg'
        },
        {
            name: 'Job Opportunities',
            id: '6',
            uri: 'https://lh3.googleusercontent.com/proxy/hnfuMgdaV-zUP00ECNAQHFL07Ira456cfcxWhRgUYhtAXGT8qUqhcARiW2FgrNTSgwERqJVdlFzPvhEnb_lhlonPuU9H1ralBFdNyqGQvNHw8gBGavN4'
        },
        {
            name: 'Software For Everyone',
            id: '7',
            uri: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        }

    ]

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={ClubData}
            renderItem={({ item }) =>
                <ClubOne>
                    <ClubICon source={{ uri: item.uri }} />
                    <ClubName>{item.name}</ClubName>
                </ClubOne>
            }
        />
    )

}

export function ClubsParticipating() {
    return (
        <PaddingContainer>

            <Header>
                <Title>ClubsParticipating</Title>
                <ButtonMoreClubs><Icon name="right" /></ButtonMoreClubs>
            </Header>

{/* Renderiza os clubs*/}
            <ClubsWrapper>
                <Club />
            </ClubsWrapper>
{/* Renderiza os clubs */}

        </PaddingContainer>
    )
}