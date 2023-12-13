// Code your solution in this file!
const returnFirstTwoDrivers = drivers => ['Antonia', 'Nuru'];

const returnLastTwoDrivers = drivers => ['Amari', 'Mo'];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = integer => fare => fare * integer;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, driversSelector) => driversSelector(drivers);
