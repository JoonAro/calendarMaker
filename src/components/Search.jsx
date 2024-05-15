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
                <button className="w-36 border border-transparent bg-mainBackground-light p-2 rounded-lg mb-6 hover:bg-accentColor-light text-fontDark hover:text-white mt-2" >
                    <h1>Submit</h1>
                </button>
                <div className='themeHolder'>
                    <div className='themeSelection cursor-pointer' onClick={() => handleSelection('wildlife')}>Wildlife</div>
                    <div className='themeSelection cursor-pointer' onClick={() => handleSelection('macro')}>Macro</div>
                    <div className='themeSelection cursor-pointer' onClick={() => handleSelection('cat')}>Cat</div>
                    <div className='themeSelection cursor-pointer' onClick={() => handleSelection('easter')}>Easter</div>
                    <div className='themeSelection cursor-pointer' onClick={() => handleSelection('santa')}>Santa</div>
                    <div className='themeSelection cursor-pointer' onClick={() => handleSelection('butterfly')}>Butterfly</div>
                    <div className='themeSelection double cursor-pointer' onClick={() => handleSelection('northern lights')}>Northern lights</div>
                </div>
            </Form>
        </div>
    )
}

export default Search