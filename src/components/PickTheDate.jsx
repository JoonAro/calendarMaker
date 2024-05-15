import '../styles/editorV2Styles.css';
import { Form } from 'react-bootstrap';
import ButtonComponent from './ButtonComponent';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { enUS } from 'date-fns/locale';
import Search from './Search';

const PickTheDate = ({ searchInput, handleSearch, handleStartDate, handleEndDate, startDate, endDate, guideH, guideText, yes, no, time, handleDatePick, handleSelection }) => {
    const today = new Date();
    const minEndDate = new Date(new Date(startDate).getTime() + (86400000 * 6));
    const maxEndDate = new Date(new Date(startDate).getTime() + (86400000 * 29));
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
            <div className="spread3">
                <h1>{guideH}</h1>
                {time && <Search searchInput={searchInput} handleSearch={handleSearch} handleSelection={handleSelection} />}


                {!time && <Form onSubmit={handleDatePick}>
                    <div className='flexColumnCentered'>
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
                                    maxDate={maxEndDate}
                                    textField={(params) => <input {...params} />}
                                />
                            </div>
                        </div>
                        <div className='h-16 mb-2 flex items-end justify-end'>
                            <ButtonComponent handleDatePick={handleDatePick}>
                                <h1>Submit</h1>
                            </ButtonComponent>
                        </div>
                    </div>
                </Form>
                }
            </div>
        </LocalizationProvider>
    );
};

export default PickTheDate;
