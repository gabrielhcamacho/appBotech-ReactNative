import React from 'react';
import { ScrollView } from 'react-native';
import { FAB } from 'react-native-elements';

import {ClubCardComponent } from '../../../components/ClubCard'


import {Text} from 'react-native'
import {
    Container,
    FABWrapper
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
        <FABWrapper>
            <FAB title="New Club" 
                color="#5636d3"
                size="large"
            />
        </FABWrapper>
    </Container>
    )
}
