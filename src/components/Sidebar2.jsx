import React from 'react';
import {
    CDBSidebar,
    CDBBadge,
    CDBSidebarMenu,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
} from 'cdbreact';

import { Form } from 'react-bootstrap';
import ButtonComponent from '../components/ButtonComponent';

const SidebarTwo = ({ handleSearch, searchInput, handleSelection, radioValue, setRadioValue, hatchSide, setHatchSide }) => {
    return (
        <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#272144" backgroundColor="#EED6D3" style={{ marginRight: '0' }}>
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
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
                </CDBSidebarHeader>

                <CDBSidebarMenuItem style={{ marginTop: '4rem', }}>
                    <div className='fullWidth'>
                        <CDBBadge color="black" className="mb-2">Examples</CDBBadge>
                    </div>
                    <div className='themeSelection' onClick={() => handleSelection('wildlife')}>Wildlife</div>
                    <div className='themeSelection' onClick={() => handleSelection('macro')}>Macro</div>
                    <div className='themeSelection' onClick={() => handleSelection('cat')}>Cat</div>
                    <div className='themeSelection' onClick={() => handleSelection('easter')}>Easter</div>
                    <div className='themeSelection' onClick={() => handleSelection('xmas')}>Xmas</div>
                    <div className='themeSelection' onClick={() => handleSelection('diving')}>Diving</div>
                </CDBSidebarMenuItem>
                <CDBSidebarMenuItem style={{ marginTop: '8rem' }}>
                    <div className='fullWidth'>
                        <CDBBadge icon="th" color="dark" className="mb-2">Hatches</CDBBadge>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
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

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

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
                </CDBSidebarMenuItem>
            </CDBSidebar>
        </div >
    );
};

export default SidebarTwo;