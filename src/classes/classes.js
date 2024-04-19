export class CalendarClass {
    constructor(start, end, bgImage, hatches, numbOfHatches, privateCalendar = false) {
        this.start = start;
        this.end = end;
        this.bgImage = bgImage;
        this.hatches = hatches;
        this.numbOfHatches = numbOfHatches;
        this.privateCalendar = privateCalendar;
    }
}
// status and private are boolean
export class HatchClass {
    constructor(date, hatchNr, hatchImg, status, hatchType = "single", hatchSide = "left") {
        this.date = date;
        this.hatchNr = hatchNr;
        this.hatchImg = hatchImg;
        this.status = status;
        this.hatchType = hatchType;
        this.hatchSide = hatchSide;
    }
}