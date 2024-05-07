import { Button } from 'react-bootstrap';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {theme === 'light' ? (
                <span role="img" aria-label="moon" style={{ fontSize: '24px' }}>
                    🌙
                </span>
            ) : (
                <span role="img" aria-label="sun" style={{ fontSize: '24px' }}>
                    ☀️
                </span>
            )}
        </Button>
    );
};

export default ThemeToggle;