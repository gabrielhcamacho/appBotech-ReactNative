import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import logoAnimation from '../../assets/animations/logoBotech.json';

import {Container} from './styles';

export function LogoAnimation() {
    return (
        <Container>
            <LottieView
                source={logoAnimation}
                autoPlay
                style={{ height: 100}}
                resizeMode = "contain"
                loop
            />

        </Container>
    )
}
