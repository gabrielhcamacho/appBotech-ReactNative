import React from 'react';
import TopTabNavigator from '../../../routes/TopBarNavigator'

import {
    Container,
    Header,
    TabView,
    FeedHeader,
    ClubsHeader,

} from './styles'

export function HomeFeed(){
    return(
        <Container>
            <TopTabNavigator/>
            <Header>
                <TabView>
                    
                </TabView>
            </Header>
        </Container>
    )
}