import { Form } from 'react-bootstrap';
import ButtonComponent from './ButtonComponent';
const Search = ({ searchInput, handleSearch, handleSelection }) => {
    return (
        <div className='flexColumnCentered'>
            <p>Search for a theme or choose one of our examples below.</p>
            <Form className='flexColumnCentered' onSubmit={handleSearch}>
                <Form.Control
                    style={{ width: "300px" }}
                    type="search"
                    placeholder="Search theme"
                    aria-label="Search"
                    ref={searchInput}
                />
                <ButtonComponent >
                    <h1>Submit</h1>
                </ButtonComponent>
                <div className='themeHolder'>
                    <div className='themeSelection' onClick={() => handleSelection('wildlife')}>Wildlife</div>
                    <div className='themeSelection' onClick={() => handleSelection('macro')}>Macro</div>
                    <div className='themeSelection' onClick={() => handleSelection('cat')}>Cat</div>
                    <div className='themeSelection' onClick={() => handleSelection('easter')}>Easter</div>
                    <div className='themeSelection' onClick={() => handleSelection('santa')}>Santa</div>
                    <div className='themeSelection' onClick={() => handleSelection('butterfly')}>Butterfly</div>
                    <div className='themeSelection double' onClick={() => handleSelection('northern lights')}>Northern lights</div>
                </div>
            </Form>
        </div>
    )
}

export default Search