import Student from './student';
import{countItems,Gender} from '../services/utils';


const studentList=[
{
    firstName: 'Prvi',
    lastName: 'Student',
    age:20,
    gender: 0,
    yearOfStudy:1
},
{
    firstName: 'Drugi',
    lastName:'Student',
    age:21,
    gender:1,
    yearOfStudy:2
}
];

export default class Students{
    constructor(){}
    getStudents(){
        let html='<ul>';
        studentList.forEach(student =>{
            let item=new Student(student.firstName, student.lastName, student.age, Gender[student.gender], student.yearOfStudy);
            html+=item.getStudent();
        });
        html+='</ul>';
        console.log('Init students', countItems(studentList));
        return html;
    }
}

