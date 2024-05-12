import '../styles/sidebar.css'
import { Form } from 'react-bootstrap';
import ButtonComponent from './ButtonComponent';
import calendarSvg from '../assets/media/calendar.svg'
import SaveButton from './SaveButton';
import ShowSidebarButton from './ShowSidebarButton';
// TODO: Create a responsive sidebar. It will disappear to the side unless hovered on.
//       Try out sixth column when really wide screen and go down to 4 columns when the screen is small. Do this with mediaquerys
const Sidebar = ({ handleSearch, searchInput, handleSelection, hatchType, hatchSide, radioHandler, goBackInEditor }) => {
    return (
        <div className="sidebar">
            <div className="filters">
                <div className='fullWidth'>
                    <p>Dates</p>
                </div>
            </div>
            <div className="filters">
                <div onClick={() => goBackInEditor("Search")} className='fullWidth'>
                    <p>Search</p>
                </div>
            </div>
            <div className="filters">
                <div onClick={() => goBackInEditor("Background")} className='fullWidth'>
                    <p>Background</p>
                </div>
            </div>
            <div className="filters">
                <div onClick={() => goBackInEditor("Hatches")} className='fullWidth'>
                    <p>Hatches</p>
                </div>
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
                    <div className='themeSelection' onClick={() => handleSelection('santa')}>Santa</div>
                    <div className='themeSelection' onClick={() => handleSelection('butterfly')}>Butterfly</div>
                    <div className='themeSelection double' onClick={() => handleSelection('northern lights')}>Northern lights</div>
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
                        value="single"
                        checked={hatchType === 'single'}
                        onChange={(e) => radioHandler(e)}
                    />
                    Single
                </label>
                <label>
                    <input
                        type="radio"
                        name="hatchType"
                        value="double"
                        checked={hatchType === 'double'}
                        onChange={(e) => radioHandler(e)}
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
                            onChange={(e) => radioHandler(e)}
                        />
                        Left
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="hatchSide"
                            value="right"
                            checked={hatchSide === 'right'}
                            onChange={(e) => radioHandler(e)}
                        />
                        Right
                    </label>
                </div>
            </div>
            <SaveButton />
        </div>
    )
}

export default Sidebar