import '../styles/sidebar.css'
import { Form } from 'react-bootstrap';
import ButtonComponent from './ButtonComponent';
import calendarSvg from '../assets/media/calendar.svg'
import SaveButton from './SaveButton';
import ShowSidebarButton from './ShowSidebarButton';
// TODO: Create a responsive sidebar. It will disappear to the side unless hovered on.
//       Try out sixth column when really wide screen and go down to 4 columns when the screen is small. Do this with mediaquerys
const Sidebar = ({ handleSelection, hatchType, hatchSide, hatchNumber, radioHandler, goBackInEditor }) => {
    return (
        <div className="sidebar">
            <div className="filters">
                <div onClick={() => goBackInEditor("Dates")} className='sidebarButton'>
                    <p>Dates</p>
                </div>
            </div>
            <div className="filters">
                <div onClick={() => goBackInEditor("Search")} className='sidebarButton'>
                    <p>Search</p>
                </div>
            </div>
            <div className="filters">
                <div onClick={() => goBackInEditor("Background")} className='sidebarButton'>
                    <p>Background</p>
                </div>
            </div>
            <div className="filters">
                <div onClick={() => goBackInEditor("Hatches")} className='sidebarButton'>
                    <p>Hatch Edit</p>
                </div>
            </div>
            <div className='filters'>
                <div className='fullWidth2'>
                    <p>Quick Edit</p>
                </div>
                <div>

                    <label>
                        <input
                            type="radio"
                            name="nrOfHatch"
                            value="dateOfHatch"
                            checked={hatchNumber === 'dateOfHatch'}
                            onChange={(e) => radioHandler(e)}
                        />
                        Date
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="nrOfHatch"
                            value="hatchNr"
                            checked={hatchNumber === 'hatchNr'}
                            onChange={(e) => radioHandler(e)}
                        />
                        Number
                    </label>
                </div>
                <div>

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
                </div>
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