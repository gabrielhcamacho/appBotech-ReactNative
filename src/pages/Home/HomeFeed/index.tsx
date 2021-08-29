import React from 'react';

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
            <Header>
                <TabView>
                    <FeedHeader>Feed</FeedHeader>
                    <ClubsHeader>Clubs</ClubsHeader>
                </TabView>
            </Header>
        </Container>
    )
}