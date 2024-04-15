import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { funEmoji } from '@dicebear/collection';

// eslint-disable-next-line react/prop-types
function Avatar({ avatarValue }) {
    const avatar = useMemo(() => {
        return createAvatar(funEmoji, {
            size: 1,
            seed: avatarValue,
        }).toDataUriSync();
    }, [avatarValue]);

    return <img src={avatar} alt={`Avatar ${avatarValue}`} />;
}

export default Avatar;