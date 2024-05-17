import { Form } from 'react-bootstrap';
import ButtonComponent from './ButtonComponent';
const Search = ({ searchInput, handleSearch, handleSelection, guideH, guideText }) => {
    return (
        <div className='flexColumnCentered'>
            <Form className='flexColumnCentered startBox' onSubmit={handleSearch}>
                <h1 style={{
                    margin: "30px 0 10px 0",
                    fontSize: '2em'
                }}>Search for a theme for the calendar</h1>
                <p>Or choose one of our examples below</p>


                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Form.Control
                        style={{ width: "300px" }}
                        type="search"
                        placeholder="Search theme"
                        aria-label="Search"
                        ref={searchInput}
                    />
                    <button className="w-36 border border-transparent bg-mainBackground-light p-2 rounded-lg mb-2 hover:bg-accentColor-light text-fontDark hover:text-white mt-2" style={{
                        color: "white",
                        marginLeft: "20px"
                    }}>
                        <h1>Submit</h1>
                    </button>
                </div>
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