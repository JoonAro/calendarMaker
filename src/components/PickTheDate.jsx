import '../styles/datePicker.css';
import { Form } from 'react-bootstrap';
import ButtonComponent from './ButtonComponent';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { fi } from 'date-fns/locale/fi';

const PickTheDate = ({ searchInput, handleSearch, handleStartDate, handleEndDate, startDate, endDate, guideH, guideText, yes, no }) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
            <div className="spread3">
                <h1>{guideH}</h1>
                <p>{guideText}</p>
                <div className='flexColumnCentered'>
                    <Form className='flexColumnCentered' onSubmit={handleSearch}>
                        <Form.Control
                            style={{ width: "300px" }}
                            type="search"
                            placeholder="Search theme"
                            aria-label="Search"
                            ref={searchInput}
                        />
                        <p>Step 2: Choose the start and end dates</p>
                        <div className='flexCentered'>
                            <div className='flexColumnCentered'>
                                <p>Starts</p>
                                <DatePicker
                                    label="Start date"
                                    value={startDate}
                                    onChange={handleStartDate}
                                    renderInput={(params) => <input {...params} />}
                                />
                            </div>
                            <div className='flexColumnCentered'>
                                <p>Ends</p>
                                <DatePicker
                                    label="End date"
                                    value={endDate}
                                    onChange={handleEndDate}
                                    renderInput={(params) => <input {...params} />}
                                />
                            </div>
                        </div>
                        <div className='h-16 mt-6 flex items-end justify-end'>
                            <ButtonComponent >
                                <h1>Submit</h1>
                            </ButtonComponent>
                        </div>
                    </Form>
                </div>
            </div>
        </LocalizationProvider>
    );
};

export default PickTheDate;
