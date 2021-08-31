import React from 'react';
import { ScrollView } from 'react-native';

import {ClubCardComponent } from '../../../components/ClubCard'


import {Text} from 'react-native'
import {
    Container,
} from './styles'

interface Props{
    titleClub: string;
}

export function HomeClubs(){
    return(
    <Container>
        <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
       <ClubCardComponent 
        titleClub="React Life"
        techCategory="React"
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
    
    </Container>
    )
}
