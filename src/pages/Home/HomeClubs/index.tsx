import React from 'react';

import {ClubCardComponent } from '../../../components/ClubCard'


import {Text} from 'react-native'
import {
    Container,
} from './styles'

interface Props{
    titleClub: string;
}

export function HomeClubs({titleClub}: Props){
    return(
    <Container>
       <ClubCardComponent titleClub="ReactLife"/>
    
    </Container>
    )
}
