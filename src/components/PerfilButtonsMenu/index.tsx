import React from 'react';

import {
    InteracionButtonContainer,
    FollowButton,
    TextButton,
    AddFriendButton,
    PlusButton,
} from './styles'

export function PerfilButtonsMenu() {
    return (
        <InteracionButtonContainer>
            <FollowButton>
                <TextButton>Follow</TextButton>
            </FollowButton>
            <AddFriendButton>
                <TextButton>Send Friend Request</TextButton>
            </AddFriendButton>
            <PlusButton>
                <TextButton>+</TextButton>
            </PlusButton>
        </InteracionButtonContainer>
    )
}