import '../styles/editorV2Styles.css';
import { Form } from 'react-bootstrap';
import ButtonForTime from './ButtonForTime';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { fi } from 'date-fns/locale/fi';
import Search from './Search';

const PickTheDate = ({ searchInput, handleSearch, handleStartDate, handleEndDate, startDate, endDate, guideH, guideText, yes, no, time, handleDatePick }) => {
    const today = new Date();
    const minEndDate = new Date(new Date(startDate).getTime() + (86400000 * 6));
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
            <div className="spread3">
                <h1>{guideH}</h1>
                {time && <Search searchInput={searchInput} handleSearch={handleSearch} />}

                {!time && <div className='flexColumnCentered'>
                    <p>Choose the start and end dates</p>
                    <div className='datePickers'>
                        <div className='flexColumnCentered'>
                            <p>Starts</p>
                            <DatePicker
                                /* label="Start date" */
                                value={startDate}
                                onChange={handleStartDate}
                                minDate={today}
                                textField={(params) => <input {...params} />}
                            />
                        </div>
                        <div className='flexColumnCentered'>
                            <p>Ends</p>
                            <DatePicker
                                /* label="End date" */
                                value={endDate}
                                onChange={handleEndDate}
                                minDate={minEndDate}
                                textField={(params) => <input {...params} />}
                            />
                        </div>
                    </div>
                    <div className='h-16 mt-6 flex items-end justify-end'>
                        <ButtonForTime handleDatePick={handleDatePick}>
                            <h1>Submit</h1>
                        </ButtonForTime>
                    </div>
                </div>}
            </div>
        </LocalizationProvider>
    );
};

export default PickTheDate;
