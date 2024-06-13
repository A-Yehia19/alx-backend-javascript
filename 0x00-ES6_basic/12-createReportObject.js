export default function createReportObject(employeesList) {
    return {
        'allEmployees': employeesList,
        'getNumberOfDepartments': _ => Object.keys(employeesList).length,
    };
}
