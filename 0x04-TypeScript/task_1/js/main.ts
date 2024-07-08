interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    [index:string]: any;
};

interface Directors extends Teacher {
    numberOfReports: number
};

function printTeacher (firstName: string, lastName: string): string{
    return `${firstName[0]}. ${lastName}`;
}

function printTeacherFunction (teacher: Teacher): string{
    return `${teacher.firstName[0]}. ${teacher.lastName}`;
}

export interface IStudentClass {
    workOnHomework(): string;
    displayName(): string;
}
  
class StudentClass implements IStudentClass {
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}