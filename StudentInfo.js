// Student Information Module

const dateofBirth = "12/12/1980";

const getStudentName = () => {
    return "write your name here";
};

const getCampusName = () => {
    return "UEL Campus";
};

// Exporting functions and variables
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

// Exporting function with parameters
exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) return "B grade";
    else return "A grade";
};
