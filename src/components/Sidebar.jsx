import '../styles/sidebar.css'
import { Form } from 'react-bootstrap';
const Sidebar = ({ handleSearch, searchInput, handleSelection, handleRadioChange, radioValue, setHatchSide }) => {
    return (
        <div className="sidebar">
            <p>Choose a theme</p>
            <div className="filters">
                <Form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0, 8px',
                    borderBottom: '1px solid #ccc'
                }} onSubmit={handleSearch}>
                    <Form.Control
                        style={{ width: "200px", margin: "0", padding: "0" }}
                        type="search"
                        placeholder="Search theme"
                        aria-label="Search"
                        ref={searchInput}
                    />
                </Form>
                <div className='themeHolder'>

                    <div className='themeSelection' onClick={() => handleSelection('nature')}>Nature</div>
                    <div className='themeSelection' onClick={() => handleSelection('birds')}>Birds</div>
                    <div className='themeSelection' onClick={() => handleSelection('cats')}>Cats</div>
                    <div className='themeSelection' onClick={() => handleSelection('shoes')}>Shoes</div>
                    <div className='themeSelection' onClick={() => handleSelection('space')}>Space</div>
                    <div className='themeSelection' onClick={() => handleSelection('diving')}>Diving</div>
                </div>
            </div>
            <p>Hatches</p>
            <div className='filters'>
                <label>
                    <input
                        type="radio"
                        name="hatchType"
                        value="hatch"
                        onChange={handleRadioChange}
                    />
                    Single
                </label>
                <label>
                    <input
                        type="radio"
                        name="hatchType"
                        value="double hatch"
                        onChange={handleRadioChange}
                    />
                    Double
                </label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="hatchSide"
                            value="left"
                            onChange={(e) => setHatchSide(e.target.value)}
                        />
                        Left
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="hatchSide"
                            value="right"
                            onChange={(e) => setHatchSide(e.target.value)}
                        />
                        Right
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar