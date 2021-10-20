import React, {useContext} from 'react';
import {LoadAnimationP} from '../../components/LoadAnimationP'
import {LogoAnimation} from '../../components/LogoAnimation'

import { useAuth } from '../../hooks/Auth'

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


export function Welcome({navigation}){

    const { user } = useAuth();

    return(
        <Container>
            <Header>
                <LogoAnimation/>
               <Title>Botech</Title>
            </Header>

            <LoadAnimationP/>

            <LoginWrapper>
                <LoginOption onPress={() => navigation.navigate("HomeFeed")}>
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
