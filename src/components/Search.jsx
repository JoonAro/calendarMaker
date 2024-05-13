import { Form } from 'react-bootstrap';
import ButtonComponent from './ButtonComponent';
const Search = ({ searchInput, handleSearch }) => {
    return (
        <div className='flexColumnCentered'>
            <p>Search for a theme or choose one of our examples.</p>
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
            </Form>
        </div>
    )
}

export default Search