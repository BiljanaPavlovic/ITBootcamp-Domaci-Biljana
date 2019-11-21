import Teacher from './teacher';
import{countItems,Gender} from '../services/utils';


const teachers=[
{
    firstName: 'Prvi',
    lastName: 'Teacher',
    age:40,
    gender: 0,
    classSubject:'srpski'
},
{
    firstName: 'Drugi',
    lastName:'Teacher',
    age:35,
    gender:1,
    classSubject:'matematika'
}
];

export default class Teachers{
    constructor(){}
    getTeachers(){
        let html='<ul>';
        teachers.forEach(teacher =>{
           let item= new Teacher(teacher.firstName, teacher.lastName, teacher.age, Gender[teacher.gender], teacher.classSubject);
           html+=item.getTeacher();
        });
        html+='</ul>';
        console.log('Init teachers', countItems(teachers));
        return html;
    }
}

