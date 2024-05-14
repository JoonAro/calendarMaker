<div className="calendarContent">
    <div className='spaceHolder'></div>
    <div className="gridHolderPreview" style={{ backgroundImage: `url(${calendar.data.bgImage})` }}>
        {calendar.data?.hatches?.map(hatch => {
            let hatchKey = hatch.hatchNr;
            let hatchType = hatch.hatchType;
            return hatchType === 'single' ? <FakeSHatch key={hatchKey} hatch={hatch} accessKey={false} /> : <FakeDblHatch key={hatchKey} hatch={hatch} accessKey={false} />;
        })}
    </div>
    <div className='spaceHolder'></div>
</div>