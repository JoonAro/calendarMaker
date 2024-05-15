import '../styles/sidebar.css'
import SaveButton from './SaveButton';
import ShowSidebarButton from '../components/ShowSidebarButton';
import { useTheme } from './theme/ThemeContext';
// TODO: Create a responsive sidebar. It will disappear to the side unless hovered on.
//       Try out sixth column when really wide screen and go down to 4 columns when the screen is small. Do this with mediaquerys
const Sidebar = ({ handleSelection, hatchType, hatchSide, hatchNumber, radioHandler, goBackInEditor }) => {

    const { theme } = useTheme();
    const smallBackground = theme === 'dark' ? 'bg-smallBackground-dark' : 'bg-smallBackground-light';
    const fontDark = theme === 'dark' ? 'text-fontDark-dark' : 'text-fontDark-light';

    return (
        <div className={`${smallBackground} ${fontDark} sidebar`}>
            <div className="filters mt-5">
                <div onClick={() => goBackInEditor("Dates")} className='flex items-center sidebarButton'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                    </svg>
                    <p className='ml-2'>Dates</p>
                </div>
            </div>
            <div className="filters">

                <div onClick={() => goBackInEditor("Search")} className='sidebarButton flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search-heart" viewBox="0 0 16 16">
                        <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
                        <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
                    </svg>
                    <p className='ml-2'>Search</p>

                </div>

            </div>
            <div className="filters">
                <div onClick={() => goBackInEditor("Background")} className='sidebarButton flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-image-alt" viewBox="0 0 16 16">
                        <path d="M7 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m4.225 4.053a.5.5 0 0 0-.577.093l-3.71 4.71-2.66-2.772a.5.5 0 0 0-.63.062L.002 13v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5z" />
                    </svg>
                    <p className='ml-2'>Background</p>

                </div>
            </div>
            <div className="filters">
                <div onClick={() => goBackInEditor("Hatches")} className='sidebarButton flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-fullscreen" viewBox="0 0 16 16">
                        <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />
                    </svg>
                    <p className='ml-2'>Hatch Edit</p>

                </div>
            </div>
            <div className='filters '>
                <div className='fullWidth2 flex items-center mb-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                    <p className='ml-2' >Quick Edit</p>
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
                <SaveButton />

            </div>

        </div>

    )
}

export default Sidebar