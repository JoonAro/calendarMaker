import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { funEmoji } from '@dicebear/collection';

// eslint-disable-next-line react/prop-types
function Avatar({ avatarValue }) {
    const avatar = useMemo(() => {
        return createAvatar(funEmoji, {
            size: 40,
            seed: avatarValue,

        }).toDataUriSync();
    }, [avatarValue]);

    return (
        <img
            src={avatar}
            alt={`Avatar ${avatarValue}`}
            style={{ borderRadius: '50%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
        />
    );
}

export default Avatar;