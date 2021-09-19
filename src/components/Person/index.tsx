import React from 'react';

import {
    PersonWrapper,
    Photo,
    Name,
} from './styles'

interface Props{
    name: string,
    uri: string,

}

export function Person({name, uri}: Props) {
    return(
        <PersonWrapper>
            <Photo source={{uri:'https://avatars.githubusercontent.com/u/62415661?s=400&u=9bc9364c7b6e91235e8d735439d7992692036aab&v=4'}}/>
            <Name>{name}</Name>
        </PersonWrapper>
    )
}