const { shuffleArray, isValidAssignment } = require('./utils');

function assignSecretSanta(employees, lastYearAssignments) {
    const lastYearMap = {};
    lastYearAssignments.forEach(entry => {
        lastYearMap[entry.Employee_EmailID] = entry.Secret_Child_EmailID;
    });

    let shuffledEmployees = [...employees];
    shuffleArray(shuffledEmployees);

    let assignments = [];
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        let assignedChild = shuffledEmployees[i];

        // Find a valid child
        let retries = 0;
        while (!isValidAssignment(employee, assignedChild, lastYearMap) && retries < employees.length) {
            shuffleArray(shuffledEmployees);
            assignedChild = shuffledEmployees[i];
            retries++;
        }

        if (retries === employees.length) {
            throw new Error("Failed to assign Secret Santa without conflicts. Try rerunning.");
        }

        assignments.push({
            Employee_Name: employee.Employee_Name,
            Employee_EmailID: employee.Employee_EmailID,
            Secret_Child_Name: assignedChild.Employee_Name,
            Secret_Child_EmailID: assignedChild.Employee_EmailID
        });
    }

    return assignments;
}

module.exports = { assignSecretSanta };
