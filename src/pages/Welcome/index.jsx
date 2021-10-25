import React, {useContext} from 'react';
import {LoadAnimationP} from '../../components/LoadAnimationP'
import {LogoAnimation} from '../../components/LogoAnimation'
import {Alert} from 'react-native'

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

    const { signInWithGoogle, signInWithApple } = useAuth();

    async function handleSignInWithGoogle(){
        try {
            await signInWithGoogle();

        } catch (error) {
            console.log(error);
            Alert.alert('Unable to connect Google account')
        }
    }

    async function handleSignInWithApple(){
        try {
            await signInWithApple();

        } catch (error) {
            console.log(error);
            Alert.alert('Unable to connect Apple account')
        }
    }

    return(
        <Container>
            <Header>
                <LogoAnimation/>
               <Title>Botech</Title>
            </Header>

            <LoadAnimationP/>

            <LoginWrapper>
                <LoginOption onPress={handleSignInWithApple}>
                    <Icon name="apple1"/>
                    <TextLogin>Login with Apple</TextLogin>
                </LoginOption>

                <LoginOption onPress={handleSignInWithGoogle}>
                    <Icon name="google"/>
                    <TextLogin>Login with Google</TextLogin>
                </LoginOption>
                <TextSignUp>Don't have an account? Sign up</TextSignUp>
            </LoginWrapper>
            
        </Container>
    )
}
