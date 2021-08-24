import React from 'react';

import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
} from './styles';

interface Props{
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'up' | 'down' | 'total'
}

export function HighlightCard({title, amount, lastTransaction}: Props){
    return(
        <Container>
            
        </Container>
    )
}