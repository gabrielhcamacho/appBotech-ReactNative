import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import programmingAnimation from '../../assets/animations/programmingBoy.json';

import {Container} from './styles';

export function LoadAnimationP() {
    return (
        <Container>
            <LottieView
                source={programmingAnimation}
                autoPlay
                style={{ height: 300}}
                resizeMode = "contain"
                loop
            />

        </Container>
    )
}
