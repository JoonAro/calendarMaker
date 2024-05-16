
import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { funEmoji } from '@dicebear/collection';
import PropTypes from 'prop-types';

function Avatar({ avatarValue }) {
    const avatarDataUri = useMemo(() => {
        return createAvatar(funEmoji, {
            size: 40,
            seed: avatarValue
        }).toDataUriSync();
    }, [avatarValue]);

    return (
        <img
            src={avatarDataUri}
            alt={`Avatar ${avatarValue} `}
            style={{ borderRadius: '50%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
        />
    );
}

Avatar.propTypes = {
    avatarValue: PropTypes.string.isRequired
};

export default Avatar;