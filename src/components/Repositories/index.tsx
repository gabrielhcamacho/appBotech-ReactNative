import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
    ContainerPaddingControl,
    Title,
    RepositoriesTypeContainer,
    Icon,
} from './styles';

export function Repositories(){
    return(
        <ContainerPaddingControl>

            <Title>Repositories</Title>

            <RepositoriesTypeContainer>
                    <Icon name="github"/>
                    <Icon name="gitlab"/>
            </RepositoriesTypeContainer>

        </ContainerPaddingControl>
    )
}