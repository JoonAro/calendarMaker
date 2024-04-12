import '../styles/sidebar.css'
import { Form } from 'react-bootstrap';
import ButtonComponent from './ButtonComponent';
import calendarSvg from '../assets/media/calendar.svg'
const Sidebar = ({ handleSearch, searchInput, handleSelection, radioValue, setRadioValue, hatchSide, setHatchSide }) => {
    return (
        <div className="sidebar">
            <img
                className="img-thumbnail mx-auto d-block mb-2"
                style={{ width: "40%", maxWidth: "5rem", height: "5rem", backgroundColor: '#EED6D3', borderColor: '#EED6D3' }}
                src={calendarSvg}
                alt="calendarSvg"
            />
            <div className="filters">
                <div className='fullWidth'>
                    <p>Choose a theme</p>
                </div>
                <Form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0, 8px, 30px, 8px',
                    borderBottom: '1px solid #ccc'
                }} onSubmit={handleSearch}>
                    <Form.Control
                        style={{ width: "200px", margin: "0", padding: "0" }}
                        type="search"
                        placeholder="Search theme"
                        aria-label="Search"
                        ref={searchInput}
                    />
                    <div className='h-16 mt-6 flex items-end justify-end'>

                        <ButtonComponent />
                    </div>
                </Form>
            </div>
            <div className='filters'>
                <div className='themeHolder'>
                    <div className='fullWidth'>
                        <p>Examples</p>
                    </div>
                    <div className='themeSelection' onClick={() => handleSelection('wildlife')}>Wildlife</div>
                    <div className='themeSelection' onClick={() => handleSelection('macro')}>Macro</div>
                    <div className='themeSelection' onClick={() => handleSelection('cat')}>Cat</div>
                    <div className='themeSelection' onClick={() => handleSelection('easter')}>Easter</div>
                    <div className='themeSelection' onClick={() => handleSelection('xmas')}>Xmas</div>
                    <div className='themeSelection' onClick={() => handleSelection('diving')}>Diving</div>
                </div>
            </div>
            <div className='filters'>
                <div className='fullWidth'>

                    <p>Hatches</p>
                </div>
                <label>
                    <input
                        type="radio"
                        name="hatchType"
                        value="hatch"
                        checked={radioValue === 'hatch'}
                        onChange={(e) => setRadioValue(e.target.value)}
                    />
                    Single
                </label>
                <label>
                    <input
                        type="radio"
                        name="hatchType"
                        value="double hatch"
                        checked={radioValue === 'double hatch'}
                        onChange={(e) => setRadioValue(e.target.value)}
                    />
                    Double
                </label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="hatchSide"
                            value="left"
                            checked={hatchSide === 'left'}
                            onChange={(e) => setHatchSide(e.target.value)}
                        />
                        Left
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="hatchSide"
                            value="right"
                            checked={hatchSide === 'right'}
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