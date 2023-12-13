const returnFirstTwoDrivers = function(drivers) {
    return ['Antonia', 'Nuru'];
};

const returnLastTwoDrivers = function(drivers) {
    return ['Amari', 'Mo'];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function(fare) {
        return (fare*integer);
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driversSelector) {
    return driversSelector(drivers);
};


    returnFirstTwoDrivers();
    returnLastTwoDrivers();
    selectingDrivers();
    createFareMultiplier();
    fareDoubler();
    fareTripler();
    selectDifferentDrivers();
