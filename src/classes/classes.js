export class CalendarClass {
    constructor(startDate, date, bgImg, hatches, numbOfHatches, bool3, bool4) {
        this.startDate = startDate;
        this.date = date;
        this.bgImg = bgImg;
        this.hatches = hatches;
        this.numbOfHatches = numbOfHatches;
        this.bool3 = bool3;
        this.bool4 = bool4;

        return {
            startDate: this.startDate,
            endDate: this.endDate,
            backgroundImage: this.backgroundImage,
            hatches: this.hatches.map((hatch) => hatch.toFirestore()),
            numbOfHatches: this.numbOfHatches,
            isPublic: this.isPublic,
        };
    }
}


export class HatchClass {
    constructor(date, hatchNr, hatchImg, status, typeOfHatch, sideOfHatch) {
        this.date = date;
        this.hatchNr = hatchNr;
        this.hatchImg = hatchImg;
        this.status = status;
        this.typeOfHatch = typeOfHatch;
        this.sideOfHatch = sideOfHatch;



        return {
            date: this.date,
            hatchNr: this.hatchNr,
            hatchImg: this.hatchImg,
            status: this.status,
            typeOfHatch: this.typeOfHatch,
            sideOfHatch: this.sideOfHatch,
        };

    }
}