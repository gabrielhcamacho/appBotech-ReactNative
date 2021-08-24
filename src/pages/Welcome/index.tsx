import React from 'react';
import { View, Text, StyleSheet} from 'react-native'

import {
    Container,
    IconLogo,
    Icon,
    Header,
    Title,
    Slogan,
    LoginWrapper,
    LoginOption,
    TextLogin,
    TextSignUp,

    
}from './styles'


export function Dashboard(){
    return(
        <Container>
            <Header>
               <IconLogo name="beer"/> 
               <Title>Botech</Title>
            </Header>
            <Slogan>The dev world in your hands</Slogan>

            <LoginWrapper>
                <LoginOption>
                    <Icon name="apple1"/>
                    <TextLogin>Login with Apple</TextLogin>
                </LoginOption>

                <LoginOption>
                    <Icon name="google"/>
                    <TextLogin>Login with Google</TextLogin>
                </LoginOption>
                <TextSignUp>Don't have an account? Sign up</TextSignUp>
            </LoginWrapper>
            
        </Container>
    )
}
